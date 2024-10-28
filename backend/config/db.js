import mongoose from "mongoose";
import ENV_VARS from "./envVars.js";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(ENV_VARS.DATABASE);
    console.log("MongoDB connected: " + conn.connection.host);
  } catch (error) {
    console.log("failed to connect database error: ", error);
  }
};
