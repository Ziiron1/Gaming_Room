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
            <h3 style={{ paddingBottom: 7 }}>Plataform(s): </h3>

            {data['platforms']['0'] &&
              <h3 style={{ marginTop: 4, fontSize: '.85rem' }}>&nbsp;
                {data['platforms']['0']['platform']['name']}
                {data['platforms']['1'] && ','}
              </h3>
            }

            {data['platforms']['1'] &&
              <h3 style={{ marginTop: 4, fontSize: '.85rem' }}>&nbsp;
                {data['platforms']['1']['platform']['name']}
                {data['platforms']['2'] && ','}
              </h3>
            }

            {data['platforms']['2'] &&
              <h3 style={{ marginTop: 4, fontSize: '.85rem' }}>&nbsp;
                {data['platforms']['2']['platform']['name']}
                {data['platforms']['3'] && ','}
              </h3>
            }

            {data['platforms']['3'] &&
              <h3 style={{ marginTop: 4, fontSize: '.85rem' }}>&nbsp;
                {data['platforms']['3']['platform']['name']}
                {data['platforms']['4'] && ','}
              </h3>
            }

            {data['platforms']['4'] &&
              <h3 style={{ marginTop: 4, fontSize: '.85rem' }}>&nbsp;
                {data['platforms']['4']['platform']['name']}
                {data['platforms']['5'] && ','}
              </h3>
            }

            {data['platforms']['5'] &&
              <h3 style={{ marginTop: 4, fontSize: '.85rem' }}>&nbsp;
                {data['platforms']['5']['platform']['name']}
                {data['platforms']['6'] && ','}
              </h3>
            }

            {data['platforms']['6'] &&
              <h3 style={{ marginTop: 4, fontSize: '.85rem' }}>&nbsp;
                {data['platforms']['6']['platform']['name']}
                {data['platforms']['7'] && ','}
              </h3>
            }

            {data['platforms']['7'] &&
              <h3 style={{ marginTop: 4, fontSize: '.85rem' }}>&nbsp;
                {data['platforms']['7']['platform']['name']}
                {data['platforms']['8'] && ','}
              </h3>
            }

          </div>
          {/* Imagem e Descrições*/}
          <div style={{ display: 'flex' }} className="all_rating_data">
            <img src={data.background_image} style={{ borderRadius: 5 }} className="img_api" alt={data.name + ` Image`} />
            <div style={{ display: 'block' }}>

              {data.metacritic && (
                <p style={{ marginLeft: 20 }}>Metacritic score: {data.metacritic}/100</p>

              )}

              <strong><small style={{ marginLeft: 20 }}>Site Rating: {data.rating}/5</small></strong>

              <div className='ratings'>
                <div className='ratings_div'>
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
                <div>
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

            {data['genres']['0'] &&
              <p>&nbsp;
                {data['genres']['0']['name']}
                {data['genres']['1'] && ','}
              </p>
            }

            {data['genres']['1'] &&
              <p>&nbsp;
                {data['genres']['1']['name']}
                {data['genres']['2'] && ','}
              </p>
            }

            {data['genres']['2'] &&
              <p>&nbsp;
                {data['genres']['2']['name']}
                {data['genres']['3'] && ','}
              </p>
            }

            {data['genres']['3'] &&
              <p>&nbsp;
                {data['genres']['3']['name']}
                {data['genres']['4'] && ','}
              </p>
            }

            {data['genres']['4'] &&
              <p>&nbsp;
                {data['genres']['4']['name']}
                {data['genres']['5'] && ','}
              </p>
            }

            {data['genres']['5'] &&
              <p>&nbsp;
                {data['genres']['5']['name']}
                {data['genres']['6'] && ','}
              </p>
            }

            {data['genres']['6'] &&
              <p>&nbsp;
                {data['genres']['6']['name']}
                {data['genres']['7'] && ','}
              </p>
            }

            {data['genres']['7'] &&
              <p>&nbsp;
                {data['genres']['7']['name']}
                {data['genres']['8'] && ','}
              </p>
            }

            {data['genres']['8'] &&
              <p>&nbsp;
                {data['genres']['8']['name']}
              </p>
            }

          </div>
          <br />
          {/* Desenvolvedores do jogo */}
          <div style={{ display: 'flex' }}>
            <h3>Developer(s): </h3>
            {data['developers']['0'] &&
              <h3 style={{ marginTop: 5, fontSize: '.8rem' }}>&nbsp;
                {data['developers']['0']['name']}
                {data['developers']['1'] && ','}
              </h3>
            }

            {data['developers']['1'] &&
              <h3 style={{ marginTop: 5, fontSize: '.8rem' }}>&nbsp;
                {data['developers']['1']['name']}
                {data['developers']['2'] && ','}
              </h3>
            }

            {data['developers']['2'] &&
              <h3 style={{ marginTop: 5, fontSize: '.8rem' }}>&nbsp;
                {data['developers']['2']['name']}
              </h3>
            }

          </div>

          <br />

          {/* Released Date */}
          <div>
            <h4>Released at: {data.released} </h4>
          </div>
          <br />

          {/* Descrição do jogo */}
          <div className='description_game'>
            {data.description_raw && (
              <>
                <span >
                  {data.description_raw}
                </span>
                <br />
              </>
            )}
            {data.website && (
              <>
                <a style={{ fontSize: '1rem' }} className="website" href={data.website}> <p>Website: {data.website}</p></a>
              </>
            )}
          </div>



          <div style={{ marginTop: 20 }}>

            <span onClick={toggleList} style={{ fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', padding: '5px', background: '#131313', borderRadius: '5px' }} >Show/Hide Tags</span>

            <ul className='game_tags' style={{ display: showList ? 'flex' : 'none' }}>

              {data['tags']['0'] &&
                <p style={{ fontSize: '1rem' }}>&nbsp;
                  {data['tags']['0']['name']}
                  {data['tags']['1'] && ','}
                </p>
              }

              {data['tags']['1'] &&
                <p style={{ fontSize: '1rem' }}>&nbsp;
                  {data['tags']['1']['name']}
                  {data['tags']['2'] && ','}
                </p>
              }

              {data['tags']['2'] &&
                <p style={{ fontSize: '1rem' }}>&nbsp;
                  {data['tags']['2']['name']}
                  {data['tags']['3'] && ','}
                </p>
              }

              {data['tags']['3'] &&
                <p style={{ fontSize: '1rem' }}>&nbsp;
                  {data['tags']['3']['name']}
                  {data['tags']['4'] && ','}
                </p>
              }

              {data['tags']['4'] &&
                <p style={{ fontSize: '1rem' }}>&nbsp;
                  {data['tags']['4']['name']}
                  {data['tags']['5'] && ','}
                </p>
              }

              {data['tags']['5'] &&
                <p style={{ fontSize: '1rem' }}>&nbsp;
                  {data['tags']['5']['name']}
                  {data['tags']['6'] && ','}
                </p>
              }

              {data['tags']['6'] &&
                <p style={{ fontSize: '1rem' }}>&nbsp;
                  {data['tags']['6']['name']}
                  {data['tags']['7'] && ','}
                </p>
              }

              {data['tags']['7'] &&
                <p style={{ fontSize: '1rem' }}>&nbsp;
                  {data['tags']['7']['name']}
                  {data['tags']['8'] && ','}
                </p>
              }
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