// npm run dev
const express = require("express");
require("dotenv").config({ path: "./config.env" });
const connectDB = require("./database.js");

const app = express();
const PORT = 8080;

//middleware, basically called every time a request is sent to server
app.use((req, res, next) => {
  console.log("Middleware called");
  console.log("Time:", Date.now());
  next();
});

//api routes on the webpage. '/' means homepage
app.get("/", (req, res) => {
  res.send("Hello Hammad");
});

app.post("/", (req, res) => {
  res.send("Hello Precious");
});

app.put("/", (req, res) => {
  res.send("Hello Sayed");
});

app.delete("/", (req, res) => {
  res.send("Hello Mr. Nwachokor");
});

//this function waits for db to connect and then starts server
const startServer = async () => {
  try {
    const db = await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (e) {
    console.log("Failed to start server", e);
  }
};

startServer();
