const express = require("express");
const mongoose = require("mongoose");

const PORT = 8080;
const app = express();

app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
