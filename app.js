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

app.post("/blog", async (req, res) => {
  // const title = req.body.title
  // const subtile = req.body.subtile
  // const description = req.body.description
  // const image = req.body.image
  console.log();

  const { title, subtitle, description, image } = req.body;
  if (!title || !subtitle || !description || !image) {
    return res.status(400).json({
      message: "Please complete title, subtitle, description & image...",
    });
  }

  await Blog.create({
    title: title,
    subtile: subtitle,
    description: description,
    image: image,
  });

  console.log(title, subtitle, description, image);
  res.status(200).json({
    message: "Blog api hit successfully....",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Huricane Project is started....");
});
