require("dotenv").config();
const express = require("express");
const conncetToDatabase = require("./database");
const Blog = require("./model/blogModel");

const app = express();
app.use(express.json()); // express / node.js can understand post data

conncetToDatabase(); // help to connect with database

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

app.get("/profile", (req, res) => {
  res.json({
    message: "This is profile page..",
  });
});

app.get("/contact", (req, res) => {
  res.status(200).json({
    message: "This is Contact Pages.....",
  });
});

app.post("/blog", (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Blog api hit successfully....",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Huricane Project is started....");
});
