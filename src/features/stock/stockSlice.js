import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const stockSlice = createSlice({
    name: 'stock',
    initialState: {
        data: [],
        currentPage: 1,
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload;
        },
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
    },
});

export const { setData, setCurrentPage } = stockSlice.actions;

export const fetchStockData = (pageNumber) => async (dispatch) => {
    try {
        const response = await axios.get(
            `https://cloud.iexapis.com/stable/tops?token=${process.env.REACT_APP_STOCK_API}`
        );
        dispatch(setData(response.data));
    } catch (error) {
        console.error('Ошибка при получении данных: ', error);
    }
};

export default stockSlice.reducer;