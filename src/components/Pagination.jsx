import React, { useState } from 'react';

const Pagination = ({ totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = page => {
        setCurrentPage(page);
    };

    return (
        <nav>
            <ul>
                {currentPage > 1 && (
                    <li>
                        <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
                    </li>
                )}
                {/* Adicione os botões de página aqui */}
                {currentPage < totalPages && (
                    <li>
                        <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;