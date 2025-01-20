//import packages
import express from "express";
import dotenv from "dotenv";

//routes

//import deefault
import connectdB from "./connectdB/connectdB.js";
import homerouter from "./routes/home.js";

//database
connectdB();
//use
const app = express();
//env
dotenv.config();
const port = process.env.PORT || 4000;

app.use("/", homerouter);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
