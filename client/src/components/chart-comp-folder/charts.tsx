// Import React Hooks
import React, { useState } from "react";

// Import CSS Hooks
import classes from "./charts.module.css";

// Import MUI Material Hooks
import { Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Import MUI Icon Hooks
// NA

// Import ChartJS Hooks
import { Chart } from "chart.js/auto";

// Import Component Hooks
// NA

// Chart Render Function
const Charts: React.FC = () => {
  const [symbol, setSymbol] = useState("");
  const [chart, setChart] = useState<Chart | null>(null);

  // const isMobile = useMediaQuery(`(max-width: 426px)`)
  // const isTablet = useMediaQuery(`(max-width: 768px)`)

  // const chartTheme = createTheme({
  //   breakpoints: {
  //       values: {
  //           xs: 0,
  //           sm: 362,
  //           md: 768,
  //           lg: 1024,
  //           xl: 1440
  //       },
  //   },
  // });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/stock/${symbol}`);
      const stockData = await response.json();

      console.log(stockData);

      const ctx = (
        document.getElementById("stockChart") as HTMLCanvasElement
      ).getContext("2d");

      if (chart) {
        chart.destroy();
      }

      const newChart = new Chart(ctx!, {
        type: "line",
        data: {
          labels: [stockData.labels],
          datasets: [
            {
              label: `${symbol} Stock Price`,
              data: [stockData.prices],
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      window.addEventListener("beforeprint", () => {
        newChart.resize(500, 400);
      });

      window.addEventListener("resize", () => {
        newChart.resize(300, 200);
      });

      setChart(newChart);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  return (
    <>
      {/* <ThemeProvider theme={chartTheme}>
        {isMobile ? (
          <>
            <div>
              <canvas id="stockChart" width='200px' height='100px' ></canvas>
            </div>
          </>
        ) : isTablet ? (
          <>
            <div>
              <canvas id="stockChart" width='300px' height='200px' ></canvas>
            </div>
          </>
        ) : (
          <>
            <div>
              <canvas id="stockChart" width='500px' height='400px' ></canvas>
            </div>
          </>
        )}
      </ThemeProvider> */}
      <div>
        <canvas id="stockChart" width="500px" height="400px"></canvas>
      </div>
    </>
  );
};

export default Charts;
