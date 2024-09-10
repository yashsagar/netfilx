import jwt from "jsonwebtoken";
import { ENV_VARS } from "../config/envVars.js";

export default function (userId, res) {
  const token = jwt.sign({ userId }, ENV_VARS.SECRET_KEY, { expiresIn: "7d" });
  res.cookie("usertoken", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000, //15days
    httpOnly: true,
    sameSite: "strict",
    secure: ENV_VARS.NODE_ENV !== "development",
  });

  return token;
}
