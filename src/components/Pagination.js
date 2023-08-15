import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, fetchStockData } from "../features/stock/stockSlice";

const Pagination = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector((state) => state.stock.currentPage);
    const totalStockRecords = useSelector((state) => state.stock.data.length);
    const maxPages = Math.ceil(totalStockRecords / 10);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            dispatch(setCurrentPage(currentPage - 1));
            dispatch(fetchStockData(currentPage - 1));
        }
    };

    const handleNextPage = () => {
        if (currentPage < maxPages) {
            dispatch(setCurrentPage(currentPage + 1));
            dispatch(fetchStockData(currentPage + 1));
        }
    };

    return (
        <div className="pagination-wrapper">
            <button className={currentPage === 1 ? 'disabled' : 'button-prev'} onClick={handlePrevPage}>
                Prev
            </button>
            <span className="page-number">Page {currentPage} of {maxPages}</span>
            <button className= {currentPage === Math.ceil(totalStockRecords / 10) ? 'disabled' : 'button-next'} onClick={handleNextPage}>Next</button>
        </div>
    );
};

export default Pagination;