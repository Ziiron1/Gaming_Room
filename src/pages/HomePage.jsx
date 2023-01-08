import React, { useEffect, useState } from 'react';
import Feed from '../components/Feed';
import useFetch from '../hooks/useFetch'
import { GET_GAMES_BY_DATE } from '../api/Api';
import styles from './HomePage.module.css';

function HomePage() {
  const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem('currentPage'), 10) || 1);
  const [quantityPerpage, setQuantityPerpage] = useState(20);
  const { request, data, loading, error } = useFetch();

  useEffect(() => {
    async function requestApi() {
      await request(GET_GAMES_BY_DATE('2022-01-01', '2023-01-06', currentPage, quantityPerpage));
    }
    requestApi();
  }, [currentPage, quantityPerpage]);

  const handlePageChange = page => {
    setCurrentPage(page);
    localStorage.setItem('currentPage', page);
  }

  const Pagination = ({ totalPages }) => {
    const pageNumbers = [...Array(totalPages).keys()].map(i => i + 1).map(number => ({ number, selected: number === currentPage }));

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    return (
      <div>

        <nav>
          <ul className={styles.numbers_of_pages} style={{ marginBottom: '20px' }}>
            {currentPage > 1 && (
              <li className={styles.page_item}>
                <button className={styles.page_link} onClick={() => handlePageChange(currentPage - 1)}>
                  Previous
                </button>
              </li>
            )}
            {pageNumbers.map(number => (
              <li key={number.number} className={styles.page_item}>
                <button
                  className={`${styles.page_link} ${number.number === currentPage ? styles.selected : ''}`}
                  onClick={() => handlePageChange(number.number)}
                >
                  {number.number}
                </button>
              </li>
            ))}
            {currentPage < totalPages && (
              <li className={styles.page_item}>
                <button className={styles.page_link} onClick={() => handlePageChange(currentPage + 1)}>
                  Next
                </button>
              </li>
            )}
          </ul>
        </nav>

        {data && (
          <>
            <form className={styles.form_quantity}>
              <label htmlFor="quantity-per-page">
                <strong> <span> Cards per Page: </span> </strong>
                <select id="quantity-per-page" className={styles.select_form} value={quantityPerpage} onChange={e => setQuantityPerpage(e.target.value)}>
                  <option value="12">12</option>
                  <option value="20">20</option>
                  <option value="32">32</option>
                  <option value="40">40</option>
                  <option value="52">52</option>
                </select>
              </label>
            </form>
            <Feed title='Principais jogos de 2022' path='games/' data={data} />
          </>
        )}

        <nav>
          <ul className={styles.numbers_of_pages}>
            {currentPage > 1 && (
              <li className={styles.page_item}>
                <button className={styles.page_link} onClick={() => handlePageChange(currentPage - 1)}>
                  Previous
                </button>
              </li>
            )}
            {pageNumbers.map(number => (
              <li key={number.number} className={styles.page_item}>
                <button className={`${styles.page_link} ${number.selected ? styles.selected : ''}`} onClick={() => handlePageChange(number.number)}>
                  {number.number}
                </button>
              </li>
            ))}
            {currentPage < totalPages && (
              <li className={styles.page_item}>
                <button className={styles.page_link} onClick={() => handlePageChange(currentPage + 1)}>
                  Next
                </button>
              </li>
            )}
          </ul>
        </nav>


      </div>
    )
  }

  return (
    <>
      <Pagination totalPages={15} />
    </>
  );
}

export default HomePage;