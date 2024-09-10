import express from "express";
import { searchController } from "../controllers/index.js";
const router = express.Router();

router.get("/history", searchController.getSearchHistory);
router.delete("/history/:id", searchController.removeItemFromSearchHistory);
router.get("/:type/:query", searchController.search);

export default router;
