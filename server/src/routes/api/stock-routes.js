import express from "express";
import axios from "axios";

const router = express.Router();

router.get("/:symbol", async (req, res) => {
  // const symbol = req.params.symbol;

  console.log(process.env.RAPIDAPI_HOST);

  try {
    const options = {
      method: "GET",
      url: "https://yh-finance.p.rapidapi.com/market/v2/get-summary",
      params: { region: "US" },
      headers: {
        "x-rapidapi-key": process.env.RAPIDAPI_KEY,
        "x-rapidapi-host": process.env.RAPIDAPI_HOST,
      },
    };

    const response = await axios.request(options);

    const startTimes = response.data.marketSummaryAndSparkResponse.result.map(
      (record) => {
        return record.spark.start;
      },
    );

    const closeValues = response.data.marketSummaryAndSparkResponse.result.map(
      (record) => {
        return record.spark.previousClose;
      },
    );

    console.log(startTimes);
    console.log(closeValues);

    res.json({
      labels: startTimes,
      values: closeValues,
    });
  } catch (error) {
    console.error("Error fetching stock data:", error);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

export default router;
