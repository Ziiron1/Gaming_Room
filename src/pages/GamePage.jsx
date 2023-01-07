import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { GET_GAMES_BY_PLATFORM, GET_GAME_BY_ID } from '../api/Api';
import Feed from '../components/Feed';
import './GamePage.css'

function GamePage() {
  const { query } = useParams();
  const { request, data, loading, error } = useFetch();
  const [title, setTitle] = React.useState(null);
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(!showList);
  }

  React.useEffect(() => {
    switch (query) {
      case '1':
        setTitle('Principais jogos de PC');
        break;
      case '2':
        setTitle('Principais jogos de Playstation');
        break;
      case '3':
        setTitle('Principais jogos de Xbox');
        break;
      case '7':
        setTitle('Principais jogos da Nintendo');
        break;
    }
  }, [query]);

  React.useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (query < 8) {
      async function fetchApi() {
        const { data } = await request(GET_GAMES_BY_PLATFORM(query, signal));
        console.log(data);
      }
      fetchApi();
    } else {
      async function fetchApi() {
        await request(GET_GAME_BY_ID(query, signal));
      }
      fetchApi();
    }

    return () => {
      controller.abort();
    };

  }, [query]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (data && data.results) return <Feed title={title} path="/games/" data={data} />;
  if (data)
    return (
      <>
        <div className='margin all_card_game'>
          <div className='platforms_flex'>
            {/* Plataformas */}
            <h3 style={{ paddingBottom: 7 }}>{data.platforms.length > 1 ? 'Plataforms: ' : 'Plataform: '}</h3>
            {data.platforms.map((platform, index) => (
              <h3 key={index}
                style={{
                  marginTop: 3, marginLeft: 2, fontSize: '1rem'
                }}>&nbsp;
                {platform.platform.name}
                {index < data.platforms.length - 1 && ','}

              </h3>
            ))}
          </div>

          {/* Imagem e Descrições*/}
          <div style={{ display: 'flex' }} className="all_rating_data">
            <img src={data.background_image} style={{ borderRadius: 5 }} className="img_api" alt={data.name + ` Image`} />
            <div style={{ display: 'block' }}>

              {data.metacritic && (
                <>
                  <strong> <p style={{ marginLeft: 20 }}>Metacritic score:</p> </strong>
                  <p style={{ marginLeft: 20 }}>{data.metacritic}/100</p>
                </>
              )}

              <div className='ratings' style={{ marginLeft: 20 }}>
                <div style={{ paddingTop: 20 }}>
                  <h4>🎯{data['ratings']['0']['title']}</h4>
                  <h4 style={{ fontWeight: 'normal' }}>{data['ratings']['0']['count']} Votes</h4>
                  <h5 style={{ fontWeight: 'normal' }}>{data['ratings']['0']['percent']}%</h5>
                </div>
                <br />
                <div>
                  <h4>👍{data['ratings']['1']['title']}</h4>
                  <h4 style={{ fontWeight: 'normal' }}>{data['ratings']['1']['count']} Votes</h4>
                  <h5 style={{ fontWeight: 'normal' }}>{data['ratings']['1']['percent']}%</h5>
                </div>
                <br />
                <div>
                  <h4>👎{data['ratings']['2']['title']}</h4>
                  <h4 style={{ fontWeight: 'normal' }}>{data['ratings']['2']['count']} Votes</h4>
                  <h5 style={{ fontWeight: 'normal' }}>{data['ratings']['2']['percent']}%</h5>
                </div>
                <br />
                <div style={{ marginBottom: 20 }}>
                  <h4>🤮{data['ratings']['3']['title']}</h4>
                  <h4 style={{ fontWeight: 'normal' }}>{data['ratings']['3']['count']} Votes</h4>
                  <h5 style={{ fontWeight: 'normal' }}>{data['ratings']['3']['percent']}%</h5>
                </div>

              </div>

            </div>

          </div>

          {/* Nome do jogo */}
          <p className='game_name'>{data.name}</p>
          <br />

          <div style={{ display: 'flex' }}>
            <h4>Genres: </h4>
            {data.genres.map((genre, index) => (
              <p key={index}>&nbsp; {genre.name}
                {index !== data.genres.length - 1 ? ',' : ''}
              </p>
            ))}
          </div>

          <br />
          {/* Desenvolvedores do jogo */}
          <div style={{ display: 'flex' }}>
            <h3>{data.developers.length > 1 ? "Developers: " : "Developer: "}</h3>
            {data.developers.map((developer, index) => (
              <h3 key={index} style={{ marginTop: 7, marginLeft: 3, letterSpacing: 1, fontSize: '.8rem' }}>
                &nbsp;{developer.name}
                {index !== data.developers.length - 1 ? ',' : ''}
              </h3>
            ))}
          </div>

          <br />

          {/* Released Date */}
          <div>
            <h4>Released at: {data.released} </h4>
          </div>
          <br />

          {/* Descrição do jogo */}
          <div className='description_game' style={{ letterSpacing: .8 }}>
            {data.description_raw && (
              <>
                <span >
                  {data.description_raw}
                </span>
                <br />
              </>
            )}
            <br />
            {data.website && (
              <>
                <div style={{ display: 'flex', fontSize: '1rem' }}>
                  <p>Website:&nbsp; </p>
                  <a style={{ fontSize: '1rem' }} className="website" href={data.website}>  {data.website}</a>
                </div>
              </>
            )}
          </div>


          <div style={{ marginTop: 25 }}>

            <span onClick={toggleList} className="ShowTags">Show/Hide Tags</span>

            <ul className='game_tags' style={{ display: showList ? 'flex' : 'none' }}>

              {data.tags.slice(0, 8).map((tag, index) => (
                <p key={index}>
                  &nbsp;{tag.name}
                  {index !== data.tags.slice(0, 8).length - 1 ? ',' : ''}
                </p>
              ))}
            </ul>
          </div>

          <br />
          <br />

          {data.background_image_additional && (
            <div>
              <h3 className='center'>Game image</h3>
              <img src={data.background_image_additional} width='700px' style={{ borderRadius: 8, paddingTop: 20, marginLeft: '9.2em' }} alt="" />
            </div>
          )}
        </div>
      </>
    );
}

export default GamePage;