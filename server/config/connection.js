import Seqeulize from "sequelize";
import "dotenv/config";

const sequelize =
  process.env.NODE_ENV === "production"
    ? new Seqeulize(process.env.DATABASE_URL)
    : new Seqeulize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
          host: "localhost",
          dialect: "postgres",
        },
      );

export default sequelize;
