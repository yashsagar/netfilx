import { getTrendingForLandingPage } from "../controllers/index.js";
import { Router } from "express";

const router = Router();
router.get("/:type", getTrendingForLandingPage);

export default router;
