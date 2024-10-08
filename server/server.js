import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sequelize from "./config/connection.js";
import axios from "axios";
import "dotenv/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../client/dist"));

app.get("/api/stock/:symbol", async (req, res) => {
  const symbol = req.params.symbol;

  console.log(process.env.RAPIDAPI_HOST);

  try {
    // const response = await axios.get(
    //   `https://${process.env.RAPIDAPI_HOST}/stock/v2/get-summary`,
    //   {
    //     params: { symbol: symbol },
    //     headers: {
    //       "X-RapidAPI-Key": process.env.RAPIDAPI_KEY,
    //       "X-RapidAPI-Host": process.env.RAPIDAPI_HOST,
    //     },
    //   },
    // );

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
    // console.log(response.data.marketSummaryAndSparkResponse.result);

    const startTimes = response.data.marketSummaryAndSparkResponse.result.map((record) => {
      return record.spark.start;
    });

    const closeValues = response.data.marketSummaryAndSparkResponse.result.map((record) => {
      return record.spark.previousClose;
    });

    console.log(startTimes);

    res.json({
      labels: startTimes,
      values: closeValues
    });
  } catch (error) {
    console.error("Error fetching stock data:", error);
    res.status(500).json({ error: "Failed to fetch stock data" });
  }
});

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

(async () => {
  await sequelize.sync({ force: true }); // NOTE: Change to false when you have finalized your models
  app.listen(PORT, () =>
    console.log(`Server is running on port http://localhost:${PORT}`),
  );
})();