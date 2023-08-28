import express from "express";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  //set static folder
  app.use(express.static(path.join(__dirname, "/frontend/build")));
}

app.listen(port, () => console.log(`Server running on port ${port}`));
