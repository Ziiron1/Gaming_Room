import React, { useEffect, useState } from 'react';
import Feed from '../components/Feed';
import useFetch from '../hooks/useFetch'
import { GET_GAMES_BY_DATE, GET_ALL } from '../api/Api';
import styles from './HomePage.module.css';
import Loading from '../img/Loading.svg'

function HomePage() {
  const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem('currentPage'), 10) || 1);
  const [quantityPerpage, setQuantityPerpage] = useState(20);
  const { request, data, gamesData, loading, error } = useFetch();
  const [gamesresult, setGamesResult] = useState();
  const [pagesToShow, setPagesToShow] = useState(6);

  useEffect(() => {

    /* Getting Api */
    async function requestApi() {
      const response = await request(GET_GAMES_BY_DATE('2022-01-01', '2023-01-06', currentPage, quantityPerpage));

      localStorage.setItem('api', JSON.stringify(response));

      setGamesResult(response);
    }

    const api = localStorage.getItem('api');
    if (api) {
      setGamesResult(JSON.parse(api));
    } else {
    }
    requestApi();
  }, [currentPage, quantityPerpage]);



  const handlePageChange = page => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', page);
  }

  const Pagination = ({ totalPages }) => {
    const pageNumbers = [...Array(totalPages).keys()].map(i => i + 1);

    if (loading) return <img src={Loading} alt="Loader" className={styles.loader} />;
    if (error) return <p>{error}</p>;
    return (
      <div>

        <section className={styles.featuredgame}>
          Featured Game
        </section>

        <main>

          <nav>
            <ul className={styles.numbers_of_pages} style={{ marginBottom: '20px' }}>
              {currentPage > 1 && (
                <li className={styles.page_item}>
                  <button className={styles.page_link} style={{ marginRight: '10px' }} onClick={() => handlePageChange(1)}>Start</button>
                  <button className={styles.page_link} onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                  </button>
                </li>
              )}
              {currentPage > pagesToShow + 2 && (
                <li className={styles.page_item}>
                  <button className={styles.page_link} onClick={() => handlePageChange(currentPage + pagesToShow - 11)}>...</button>
                </li>
              )}
              {pageNumbers.map((number, index) => {
                if (currentPage < pagesToShow + 2) {
                  if (index + 1 > pagesToShow) return null;
                } else if (currentPage > totalPages - pagesToShow - 1) {
                  if (index + 1 < totalPages - pagesToShow) return null;
                } else {
                  if (index + 1 < currentPage - pagesToShow + 2 || index + 1 > currentPage + pagesToShow - 1) return null;
                }
                return (
                  <li key={number} className={styles.page_item}>
                    <button
                      className={`${styles.page_link} ${number === currentPage ? styles.selected : ''}`}
                      onClick={() => handlePageChange(number)}
                    >
                      {number}
                    </button>
                  </li>
                );
              })}
              {currentPage < totalPages - pagesToShow - 1 && (
                <li className={styles.page_item}>
                  <button className={styles.page_link} onClick={() => {
                    setCurrentPage(currentPage + pagesToShow + 1);
                    handlePageChange(currentPage + pagesToShow);
                  }}>...</button>
                </li>
              )}

              {currentPage < totalPages && (
                <li className={styles.page_item}>
                  <button className={styles.page_link} onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                  </button>
                  <button className={styles.page_link} style={{ marginLeft: '10px' }} onClick={() => handlePageChange(totalPages)}>End</button>
                </li>
              )}
            </ul>
          </nav>

          {data && (
            <>
              <form className={styles.form_quantity}>
                <label htmlFor="quantity-per-page">
                  <strong> <span> Games per Page: </span> </strong>
                  <select id="quantity-per-page" className={styles.select_form} value={quantityPerpage} onChange={e => setQuantityPerpage(e.target.value)}>
                    <option value="12">12</option>
                    <option value="20">20</option>
                    <option value="32">32</option>
                    <option value="40">40</option>
                  </select>
                </label>
              </form>
              <Feed title='Main Games of 2022' path='games/' data={data} gamesData={gamesresult.data} />
            </>
          )}

          <nav>
            <ul className={styles.numbers_of_pages} style={{ marginBottom: '20px' }}>
              {currentPage > 1 && (
                <li className={styles.page_item}>
                  <button className={styles.page_link} style={{ marginRight: '10px' }} onClick={() => handlePageChange(1)}>Start</button>
                  <button className={styles.page_link} onClick={() => handlePageChange(currentPage - 1)}>
                    Previous
                  </button>
                </li>
              )}
              {currentPage > pagesToShow + 2 && (
                <li className={styles.page_item}>
                  <button className={styles.page_link} onClick={() => handlePageChange(currentPage + pagesToShow - 11)}>...</button>
                </li>
              )}
              {pageNumbers.map((number, index) => {
                if (currentPage < pagesToShow + 2) {
                  if (index + 1 > pagesToShow) return null;
                } else if (currentPage > totalPages - pagesToShow - 1) {
                  if (index + 1 < totalPages - pagesToShow) return null;
                } else {
                  if (index + 1 < currentPage - pagesToShow + 2 || index + 1 > currentPage + pagesToShow - 1) return null;
                }
                return (
                  <li key={number} className={styles.page_item}>
                    <button
                      className={`${styles.page_link} ${number === currentPage ? styles.selected : ''}`}
                      onClick={() => handlePageChange(number)}
                    >
                      {number}
                    </button>
                  </li>
                );
              })}
              {currentPage < totalPages - pagesToShow - 1 && (
                <li className={styles.page_item}>
                  <button className={styles.page_link} onClick={() => {
                    setCurrentPage(currentPage + pagesToShow + 1);
                    handlePageChange(currentPage + pagesToShow);
                  }}>...</button>
                </li>
              )}

              {currentPage < totalPages && (
                <li className={styles.page_item}>
                  <button className={styles.page_link} onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                  </button>
                  <button className={styles.page_link} style={{ marginLeft: '10px' }} onClick={() => handlePageChange(totalPages)}>End</button>
                </li>
              )}
            </ul>
          </nav>

        </main>

      </div>
    )
  }

  return (
    <>
      <Pagination totalPages={75} />
    </>
  );
}

export default HomePage;