import { LineChart } from '@mui/x-charts/LineChart';

// CSS Imports


export default function ChartsOverviewDemo() {
=======
import React, { useState } from 'react';
import { Chart } from 'chart.js/auto';

const Charts: React.FC = () => {
  const [symbol, setSymbol] = useState('');
  const [chart, setChart] = useState<Chart | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/stock/${symbol}`);
      const stockData = await response.json();
      const stockPrice = stockData.price.regularMarketPrice.raw;

      const ctx = (document.getElementById('stockChart') as HTMLCanvasElement).getContext('2d');

      if (chart) {
        chart.destroy();
      }

      const newChart = new Chart(ctx!, {
        type: 'line',
        data: {
          labels: ['Price'],
          datasets: [{
            label: `${symbol} Stock Price`,
            data: [stockPrice],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      setChart(newChart);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  return (
    <div>
      <h1>Search for a Stock Symbol</h1>
      <form id="stockForm" onSubmit={handleSubmit}>
        <input
          type="text"
          id="symbolInput"
          placeholder="Enter stock symbol (e.g., AAPL)"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <canvas id="stockChart" width="400" height="200"></canvas>
      </div>
    </div>
  );
};

export default Charts;