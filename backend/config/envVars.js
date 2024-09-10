import dotenv from "dotenv";
dotenv.config();

export const ENV_VARS = {
  PORT: process.env.PORT || 3000,
  MONGO_URL: process.env.MONGO_URL,
  SECRET_KEY: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  TMDB_READ_TOKEN: process.env.TMDB_READ_TOKEN,
};
