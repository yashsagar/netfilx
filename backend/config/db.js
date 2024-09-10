import mongoose from "mongoose";
import { ENV_VARS } from "./envVars.js";

export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(ENV_VARS.MONGO_URL);
    console.log("mongoDB connected: " + connection.connection.host);
  } catch (error) {
    console.error("error connecting to MONGODB: " + error.message);
    process.exit(1);
  }
};
