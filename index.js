import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userModel from "./userModel.js";

const app = express();
const port = 3001;

dotenv.config();

app.use(express.json());

const connectiontoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    /// "mongodb+srv://giedrevalanciute:Laime11*@cluster0.rh0wek1.mongodb.net/user?retryWrites=true&w=majority"
    console.log("Connection to mongoDB is successful");
  } catch (error) {
    console.error(error);
  }
};

app.post("/create", async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).send("New user is created");
  } catch (error) {
    res.status(405).send(error);
    console.error(error);
  }
});

app.listen(port, () => {
  connectiontoDB();
  console.log(`Server started on port ${port}`);
});
