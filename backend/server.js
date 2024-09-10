import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// route import
import {
  authRoute,
  movieAndTvRoute,
  searchRoute,
  landingPageData,
} from "./routes/index.js";

// utils import
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";
import { protectRoute } from "./middleware/protectRoute.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(cookieParser());

// route
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/data", protectRoute, movieAndTvRoute);
app.use("/api/v1/search", protectRoute, searchRoute);
app.use("/api/v1/landingPageData", landingPageData);

app.get("/test", (req, res) => {
  res.status(200).send("test working");
});

// starting the server
app.listen(ENV_VARS.PORT, () => {
  console.log(`sever started at http://localhost:${ENV_VARS.PORT}`);

  connectDB();
});
