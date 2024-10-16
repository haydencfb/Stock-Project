import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sequelize } from "./src/models/index.js";
import axios from "axios";
import "dotenv/config";
import routes from "./src/routes/index.js";
import { seedAll } from "./src/seeds/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("../client/dist"));

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });
}

await seedAll();

(async () => {
  await sequelize.sync({ force: false }); // NOTE: Change to false when you have finalized your models
  app.listen(PORT, () =>
    console.log(`Server is running on port http://localhost:${PORT}`),
  );
})();
