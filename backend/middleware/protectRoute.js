import { User } from "../models/user.model.js";
import ENV_VARS from "../config/envVars.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.usertoken;

    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - No Token Provided" });
    }
    const decoded = jwt.verify(token, ENV_VARS.SECRET_KEY);

    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "Unauthorized - Invalid Token" });
    }

    const user = await User.findById(decoded.userId, { password: 0 });

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    delete user.password;

    req.user = user;

    next();
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
