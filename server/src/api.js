import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_URL = 'https://yahoo-finance-api.p.rapidapi.com/';
const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

const options = {
    headers: {
        'X-RapidAPI-Host': 'yahoo-finance-api.p.rapidapi.com',
        'X-RapidAPI-Key': API_KEY,
    },
};

export const fetchStockData = async (symbol) => {
    try {
        const response = await axios.get(`${API_URL}stock/${symbol}`, options);
        return response.data;
    } catch (error) {
        console.error("Error fetching stock data:", error);
        throw error;
    }
};
