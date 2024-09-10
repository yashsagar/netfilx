import express from "express";
import { movieAndTvController } from "../controllers/index.js";
const router = express.Router();

router.get("/:type/trending", movieAndTvController.getTrending);
router.get("/:type/:id/trailers", movieAndTvController.getTrailers);
router.get("/:type/:id/details", movieAndTvController.getDetails);
router.get("/:type/:id/similarMovies", movieAndTvController.getSimilar);
router.get("/:type/:category", movieAndTvController.getByCategory);

export default router;
