import dotenvFlow from "dotenv-flow";
dotenvFlow.config();

const ENV_VARS = {
  PORT: process.env.PORT || 3000,
  DATABASE: process.env.DATABASE,
  SECRET_KEY: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  TMDB_READ_TOKEN: process.env.TMDB_READ_TOKEN,
};

export default ENV_VARS;
