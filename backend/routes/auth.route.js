import express from "express";

import { authController } from "../controllers/index.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

//testing purpose
// router.use((req, res, next) => {
//   console.log("auth routs path", req.path, req.body);
//   next();
// });

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);
router.get("/authCheck", protectRoute, authController.authCheck);

export default router;
