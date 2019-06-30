/* IMPORTS */
require("dotenv").config();
const { join } = require("path");
const express = require("express");

/* SERVER CONFIGURATION */
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(join(__dirname, "../../frontend/public")));

app.listen(port, () =>
  console.log(`Your Website is running at http://localhost:${port}`)
);
