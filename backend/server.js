const express = require("express");
require("dotenv").config({ path: "./config.env" });
const connectDB = require("./database.js");

const app = express();
const PORT = 8080;

//this function waits for db to connect and then starts server
const startServer = async () => {
  try {
    const db = await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (e) {
    console.log("Failed to start server", e);
  }
};

startServer();
