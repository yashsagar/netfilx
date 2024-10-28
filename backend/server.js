import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDb } from "./config/db.js";

// this is configure so the we can implement this project to my main sever
import router from "./index.routes.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

//testing purpose
app.use((req, res, next) => {
  console.log("server.js testing path", req.path, req.cookies);
  next();
});

app.use("/netflix", router);

//testing purpose
app.get("/test", (req, res) => {
  res.json("sever working correctly");
});

app.listen("3000", () => {
  console.log("sever started http://localhost:3000");
  connectDb();
});
