import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
const { MONGO_USER, MONGO_PASS } = process.env;

import boardRouter from "./routes/boards";

const app = express();

mongoose.connect(`mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.ovxszja.mongodb.net/?retryWrites=true&w=majority`);

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/boards", boardRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500);
  res.json({
    status: "error",
    message: err.message
  })
})

const port = 3002; //node 서버가 사용할 포트 번호, 리액트의 포트번호(3000)와 충돌하지 않게 다른 번호로 할당
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
