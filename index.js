import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import brandRouter from "./routes/brandRoute.js ";

const app = express();
const port = 3001;

dotenv.config();

app.use(express.json());

const connectiontoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connection to mongoDB is successful");
  } catch (error) {
    console.error(error);
  }
};

//BRAND
app.use("/api", brandRouter);

app.listen(port, () => {
  connectiontoDB();
  console.log(`Server started on port ${port}`);
});
