import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import blogRouter from "./routes/blogs.js";
import commentRouter from "./routes/comments.js";

export const app = express();
dotenv.config();

//Middlewears
app.use(express.json());
app.use(cors());
const api = process.env.API;

// api
app.use(`${api}/blogs`, blogRouter);
app.use(`${api}/comments`, commentRouter);

// Database Connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log(err.message));

app.listen(process.env.PORT, () =>
  console.log(`listening on port ${process.env.PORT}`)
);
