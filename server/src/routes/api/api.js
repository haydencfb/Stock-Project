import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const API_URL = "https://yahoo-finance-api.p.rapidapi.com/";
const API_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

const options = {
  headers: {
    "X-RapidAPI-Host": "yahoo-finance-api.p.rapidapi.com",
    "X-RapidAPI-Key": API_KEY,
  },
};

app.get("/stock/:symbol", async (req, res) => {
  const symbol = req.params.symbol;
  try {
    const response = await fetch(`${API_URL}stock/${symbol}`, options);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("Error fetching stock data:", error);
    res.status(500).send("Error fetching stock data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
