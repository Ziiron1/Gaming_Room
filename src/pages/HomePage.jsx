import React from 'react';
import Feed from '../components/Feed';
import useFetch from '../hooks/useFetch'
import { GET_GAMES_BY_DATE } from '../api/Api';

function HomePage() {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function requestApi() {
      await request(GET_GAMES_BY_DATE('2022-01-01', '2023-01-06'));
    }
    requestApi();
  }, []);

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>{error}</p>;
  return <Feed title='Principais jogos de 2022' path='games/' data={data}/>;
}

export default HomePage;
