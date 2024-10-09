import Seqeulize from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const RAPIDAPI_KEY = process.env.REACT_APP_RAPIDAPI_KEY;

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
            dialectOptions: {
                apiKey: RAPIDAPI_KEY,
            },
            },
        );

export default sequelize;