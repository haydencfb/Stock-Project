import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sequelize from "./config/connection.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../client/dist"));

app.get('/api/stock/:symbol', async (req, res) => {
  const symbol = req.params.symbol;

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

  try {
    const response = await axios.get(`https://${RAPIDAPI_HOST}/stock/v2/get-summary`, {
      params: { symbol: symbol },
      headers: {
        'X-RapidAPI-Key': RAPIDAPI_KEY,
        'X-RapidAPI-Host': RAPIDAPI_HOST,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    res.status(500).json({ error: 'Failed to fetch stock data' });
  }
  
});

