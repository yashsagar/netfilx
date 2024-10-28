import jwt from "jsonwebtoken";
import ENV_VARS from "../config/envVars.js";

export default function (userId, res) {
  const token = jwt.sign({ userId }, ENV_VARS.SECRET_KEY, {
    expiresIn: "1d",
  });

  console.log(!ENV_VARS.NODE_ENV === "development");
  res.cookie("usertoken", token, {
    maxAge: 24 * 60 * 60 * 1000, //15days
    httpOnly: true,
    SameSite: "None",
    secure: false,
  });

  return token;
}
