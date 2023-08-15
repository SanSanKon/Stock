import React from "react";
import { useSelector } from 'react-redux';

const StockTable = () => {
    const stockData = useSelector((state) => state.stock.data);
    const currentPage = useSelector((state) => state.stock.currentPage);

    const recordsStartIndex = (currentPage - 1) * 10;
    const recordsEndIndex = recordsStartIndex + 10;

    const displayedStockRecords = stockData.slice(recordsStartIndex, recordsEndIndex);

    return(
        <div className="stock-wrapper">
            <table className="stock-table">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Symbol</th>
                        <th>Sector</th>
                        <th>Security Type</th>
                        <th>Ask Price</th>
                        <th>Ask Size</th>
                        <th>Bid Price</th>
                        <th>Bid Size</th>
                        <th>Last Sale Price</th>
                        <th>Last Sale Size</th>
                        <th>Last Sale Time</th>
                        <th>Last Updated</th>
                        <th>Volume</th>
                    </tr>
                </thead>
                <tbody>
                    {displayedStockRecords.map((stock, index) => (
                        <tr key={stock.symbol}>
                            <td>{recordsStartIndex + index + 1}</td>
                            <td>{stock.symbol}</td>
                            <td>{stock.sector}</td>
                            <td>{stock.securityType}</td>
                            <td>{stock.askPrice}</td>
                            <td>{stock.askSize}</td>
                            <td>{stock.bidPrice}</td>
                            <td>{stock.bidSize}</td>
                            <td>{stock.lastSalePrice}</td>
                            <td>{stock.lastSaleSize}</td>
                            <td>{stock.lastSaleTime}</td>
                            <td>{stock.lastUpdated}</td>
                            <td>{stock.volume}</td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </div>
    );
};

export default StockTable;