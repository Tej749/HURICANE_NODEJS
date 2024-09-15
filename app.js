const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hellow World ...Home Page...");
});

app.get("/about", (req, res) => {
  res.send("Welcome to About pages....");
});

app.listen(3000, () => {
  console.log("Huricane Project is started....");
});
