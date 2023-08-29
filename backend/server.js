import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;
import connectDB from "./config/db.js";
import bodyParser from "body-parser"
import jwt from "jsonwebtoken"
import cors from "cors"
import bcrypt from "bcrypt";
// import User from "./models/userModel.js"
import mongoose from "mongoose";

// const corsOptions = {
//   origin: "http://localhost:3000", // Change this to your frontend's URL
//   optionsSuccessStatus: 200,
// };

const app = express();

app.use(bodyParser.json());
app.use(cors);

connectDB();

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  phonenumber: String,
  password: String,
});

const User = mongoose.model('User', UserSchema);

app.post('/register', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
      name:req.body.name,
      email:req.body.email,
      phonenumber:req.body.phonenumber,
      password:hashedPassword,
    });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid password' });
    }
    const token = jwt.sign({ userId: user._id }, 'secret_key');
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  //set static folder
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}


app.listen(port, () => console.log(`Server running on port ${port}`));
