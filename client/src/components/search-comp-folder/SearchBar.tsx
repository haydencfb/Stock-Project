// React Hook Imports
// import * as React from 'react';
import React, { useState } from "react";
import { Chart } from "chart.js/auto";

// MUI Material Imports
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid2";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// CSS Imports
import classes from "./searchbar.module.css";

const SearchBar = () => {
  const [symbol, setSymbol] = useState("");
  const [chart, setChart] = useState<Chart | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/stock/${symbol}`);
      console.log(response)
      const stockData = await response.json();
    //   const stockPrice = stockData.price.regularMarketPrice.raw;

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
          labels: stockData.labels,
          datasets: [
            {
              label: `${symbol} Stock Price`,
              data: stockData.values,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        // options: {
        //   scales: {
        //     y: {
        //       beginAtZero: true,
        //     },
        //   },
        // },
      });

      setChart(newChart);
    } catch (error) {
      console.error("Error fetching stock data:", error);
    }
  };

  const searchTheme = createTheme({
    palette: {
      primary: {
        main: "#000000",
      },
      secondary: {
        main: "#6D696A",
      },
      success: {
        main: "#26A96C",
      },
      info: {
        main: "#EAEAEA",
      },
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 362,
        md: 768,
        lg: 1024,
        xl: 1440,
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={searchTheme}>
        <Grid container direction="row" spacing={2}>
          <Grid size={12} display="flex" justifyContent="center">
            <Box
              sx={{
                width: "750px",
                maxWidth: "100%",
                margin: "15px",
                marginTop: 15,
              }}
            >
              <form
                className={`${classes.searchInput}`}
                id="stockForm"
                onSubmit={handleSubmit}
              >
                <input
                  className={`${classes.searchText}`}
                  type="text"
                  id="symbolInput"
                  placeholder="Enter stock symbol (e.g., AAPL)"
                  value={symbol}
                  onChange={(e) => setSymbol(e.target.value)}
                  required
                />
                <Button
                  className={`${classes.searchButton}`}
                  variant="contained"
                  type="submit"
                >
                  Search
                </Button>
              </form>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export default SearchBar;
