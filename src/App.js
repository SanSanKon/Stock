import './App.scss';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
//import store from './store';
import StockTable from './components/StockTable';
import Pagination from './components/Pagination';
import { fetchStockData } from './features/stock/stockSlice';

//import { useState, useEffect } from 'react';

function App() {

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   const fetchStockData = async () => {
  //     const result = await fetch(`https://cloud.iexapis.com/stable/tops?token=${process.env.REACT_APP_STOCK_API}&symbols=aapl`);
  //     const data = await result.json();
  //     //console.log(data);
  //     setData(data);
  //   }
  //   fetchStockData();
  // }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchStockData(1));
  }, [dispatch]);
  
  return (
      <div className="App">
        <h1>Stock Application</h1>
        <StockTable />
        <Pagination />
      </div>
  );
}

export default App;
