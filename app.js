require("dotenv").config();
const express = require("express");
const conncetToDatabase = require("./database");
const app = express();

conncetToDatabase();

app.get("/", (req, res) => {
  res.json({
    message: "Hello World ....This is Home Page...!!",
  });
});

app.get("/about", (req, res) => {
  res.json({
    message: "Welcome to About pages....",
  });
});

app.get("/contact", (req, res) => {
  res.json({
    message: "This is Contact Pages.....",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Huricane Project is started....");
});
