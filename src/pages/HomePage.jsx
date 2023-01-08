import React, { useEffect, useState } from 'react';
import Feed from '../components/Feed';
import useFetch from '../hooks/useFetch'
import { GET_GAMES_BY_DATE } from '../api/Api';
import styles from './HomePage.module.css';
function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const { request, data, loading, error } = useFetch();

  useEffect(() => {
    async function requestApi() {
      await request(GET_GAMES_BY_DATE('2022-01-01', '2023-01-06', currentPage, 41));
    }
    requestApi();
  }, [currentPage]);

  const handlePageChange = page => {
    setCurrentPage(page);
  }

  const Pagination = ({ totalPages }) => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    if (loading) return <p>Carregando...</p>;
    if (error) return <p>{error}</p>;
    return (<>
      {data && <Feed title='Principais jogos de 2022' path='games/' data={data} />}


      <nav>
        <ul className={styles.numbers_of_pages}>
          {currentPage > 1 && (
            <li className='page-item'>
              <button className='page-link' onClick={() => handlePageChange(currentPage - 1)}>
                Anterior
              </button>
            </li>
          )}
          {pageNumbers.map(number => (
            <li key={number} className='page-item'>
              <button className='page-link' onClick={() => handlePageChange(number)}>
                {number}
              </button>
            </li>
          ))}
          {currentPage < totalPages && (
            <li className='page-item'>
              <button className='page-link' onClick={() => handlePageChange(currentPage + 1)}>
                Próximo
              </button>
            </li>
          )}
        </ul>
      </nav>



    </>
    )
  }

  return (
    <>
      <Pagination totalPages={10} />
    </>
  );
}

export default HomePage;