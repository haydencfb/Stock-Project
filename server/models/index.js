import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  method: 'GET',
  url: 'https://yh-finance.p.rapidapi.com/market/v2/get-charts',
  params: { region: 'US', symbols: 'AAPL' },
  headers: {
    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
    'X-RapidAPI-Host': 'yh-finance.p.rapidapi.com'
  }
};

async function fetchStockData() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


console.log('RAPIDAPI_KEY:', process.env.RAPIDAPI_KEY);

fetchStockData();
