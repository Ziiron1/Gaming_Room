import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { GET_GAMES_BY_PLATFORM, GET_GAME_BY_ID } from '../api/Api';
import Feed from '../components/Feed';
import styles from './GamePage.module.css'
import Loading from '../img/Loading.svg'

function GamePage() {
  const { query } = useParams();
  const { request, data, loading, error } = useFetch();
  const [title, setTitle] = useState(null);
  const [showList, setShowList] = useState(false);
  const [sortOrder, setSortOrder] = useState('desc');

  const toggleList = () => {
    setShowList(!showList);
  }

  React.useEffect(() => {
    switch (query) {
      case '1':
        setTitle('Top Xbox One Games');
        break;
      case '2':
        setTitle('Top iOS Games');
        break;
      case '3':
        setTitle('Top Xbox Games');
        break;
      case '4':
        setTitle('Top Pc Games');
        break;
      case '5':
        setTitle('Top macOS Games');
        break;
      case '6':
        setTitle('Top Linux Games');
        break;
      case '7':
        setTitle('Top Nintendo Switch Games');
        break;
      case '14':
        setTitle('Top Xbox 360 Games');
        break;
      case '16':
        setTitle('Top PlayStation 3 Games');
        break;
      case '18':
        setTitle('Top PlayStation 4 Games');
        break;
      case '21':
        setTitle('Top Android Games');
        break;
      case '171':
        setTitle('Top Web Games');
        break;
      case '186':
        setTitle('Top Xbox Series S/X Games');
        break;
      case '187':
        setTitle('Top PlayStation 5 Games');
        break;
    }
  }, [query]);

  // React.useEffect(() => {
  //   switch (query) {
  //     case '1':
  //       setTitle('Top Xbox One Games');
  //       break;
  //   }
  // }, [query]);

  const getMessage = (rating) => {
    return rating.title === 'exceptional' ? '🎯 Exceptional' :
      rating.title === 'recommended' ? '👍 Recommended' :
        rating.title === 'meh' ? '👎 Meh' :
          '🤮 Skip';
  }


  async function fetchGamesByPlatform(query, signal) {
    const { data } = await request(GET_GAMES_BY_PLATFORM(query, signal));
    console.log(data);
  }

  async function fetchGameById(query, signal) {
    await request(GET_GAME_BY_ID(query, signal));
  }

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    if (query < 190) {
      fetchGamesByPlatform(query, signal);
    } else {
      fetchGameById(query, signal);
    }

    return () => {
      controller.abort();
    };

  }, [query]);




  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  }

  const compareFunction = (a, b) => {
    if (sortOrder === 'asc') {
      return a.percent - b.percent;
    } else {
      return b.percent - a.percent;
    }
  }

  let sortedRatings = [];
  if (data && data.ratings) {
    sortedRatings = data.ratings.sort(compareFunction);
  }

  let description = [''];
  if (data && data.description_raw) {
    description = data.description_raw;
    if (description.length > 1200) {
      description = description.substring(0, 1200) + "...";
    }
  }

  if (loading) return <img src={Loading} alt="Loader" className={styles.loader} />;
  if (error) return <p>{error}</p>;
  if (data && data.results) return <Feed title={title} path="/games/" data={data} />;
  if (data)
    return (
      <>
        <div className={`${styles.margin} ${styles.all_card_game}`}>
          <div className={styles.platforms_flex}>
            {/* Plataformas */}
            <h3 style={{ paddingBottom: 7 }}>{data.platforms.length > 1 ? 'Plataforms: ' : 'Plataform: '}</h3>
            {data.platforms.slice(0, 9).map((platform, index) => (
              <h3 key={index} style={{ marginTop: 3, marginLeft: 2, fontSize: '1rem' }}>
                &nbsp;
                {platform.platform.name}
                {index < data.platforms.length - 1 && ','}
              </h3>
            ))}
          </div>

          {/* Imagem e Descrições*/}
          <div style={{ display: 'flex' }} className={styles.all_rating_data}>
            <img src={data.background_image} style={{ borderRadius: 5 }} className={styles.img_api} alt={data.name + ` Image`} />
            <div style={{ display: 'block' }}>

              {data.metacritic && (
                <>
                  <strong> <p style={{ marginLeft: 20, marginTop: 15 }}>Metacritic score:</p> </strong>
                  <p style={{ marginLeft: 20 }}>{data.metacritic}/100</p>
                </>
              )}

              {data ? (
                <div className={styles.ratings} style={{ marginLeft: 20 }}>
                  <div style={{ paddingTop: 20 }}>
                    <button className={styles.toogle_sort_btn} onClick={toggleSortOrder}>Toggle Sort Order</button>
                    {sortedRatings.map((rating, index) => (
                      <div key={index} style={{ marginBottom: 15 }}>
                        {getMessage(rating)}
                        <h4 style={{ fontWeight: 'normal' }}>{rating.count} Votes</h4>
                        <h5 style={{ fontWeight: 'normal' }}>{rating.percent}%</h5>
                      </div>
                    ))}
                  </div>
                  <br />
                </div>
              ) : (
                <div>Loading...</div>
              )}

            </div>

          </div>
          <div>

            {/* Nome do jogo */}
            <p className={styles.game_name}>{data.name}</p>
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
            {data || data.description_raw ? (
              <div className={styles.description_game} style={{ letterSpacing: .8 }}>
                {data.description_raw && (
                  <>
                    <span >
                      {description}
                    </span>
                    <br />
                  </>
                )}
                <br />
                {data.website && (
                  <>
                    <div style={{ display: 'flex', fontSize: '1rem' }}>
                      <p>Website:&nbsp; </p>
                      <a style={{ fontSize: '1rem' }} className={styles.website} href={data.website} target="_blank">  {data.website}</a>
                    </div>
                  </>
                )}
              </div>

            ) : (
              <p>loading ...</p>
            )}

          </div>

          <div style={{ marginTop: 25, wordWrap: 'break-word' }}>
            <span onClick={toggleList} className={styles.ShowTags}>Show/Hide Tags</span>
            <div className={styles.game_tags} style={{ display: showList ? 'flex' : 'none', flexWrap: 'wrap' }}>
              {data.tags.map((tag, index) => (
                <p key={index}>&nbsp;
                  {index !== data.tags.length - 1 ? tag.name.slice(0) + ', ' : tag.name}
                </p>
              ))}
            </div>
          </div>


          <br />
          <br />

          {data.background_image_additional && (
            <div>
              <h3 className={styles.center}>Game image</h3>
              <img src={data.background_image_additional} width='700px' style={{ borderRadius: 8, paddingTop: 20, marginLeft: '9.2em' }} alt="" />
            </div>
          )}
        </div>
      </>
    );
}

export default GamePage;