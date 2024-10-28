// this is configure so the we can implement this project to my main sever

import express from "express";

// utils import
import { protectRoute } from "./middleware/protectRoute.js";

const router = express.Router();

// route import
import {
  authRoute,
  movieAndTvRoute,
  searchRoute,
  landingPageData,
} from "./routes/index.js";

// route
router.use("/v1/auth", authRoute);
router.use("/v1/data", protectRoute, movieAndTvRoute);
router.use("/v1/search", protectRoute, searchRoute);
router.use("/v1/landingPageData", landingPageData);

export default router;
