import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import ProductRoutes from "./routes/products.js";
// importing our .env file
import "dotenv/config";

// initialise the express app
const app = express();
// initialise the port number for our server
const PORT = 5000;

// middlewares

// parsing the incoming request
app.use(bodyParser.json());
// using cors to get rid from "CORS errors"
app.use(cors());

// making routes
app.use("/products", ProductRoutes);

// connecting to MongoDb
mongoose
  .connect(process.env.DB_CONNECTION)
  .then(() => {
    console.log("connect to Db!");
  })
  .catch((err) => console.log(err));

// Server Start
app.listen(PORT, () =>
  console.log(`server is running on a Port: http://localhost:${PORT}`)
);
