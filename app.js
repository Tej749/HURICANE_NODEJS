require("dotenv").config();
const express = require("express");
const conncetToDatabase = require("./database");
const Blog = require("./model/blogModel");
const app = express();
app.use(express.json()); // express / node.js can understand post data
const { multer, storage } = require("./middleware/multerConfig");
const upload = multer({ storage: storage });

conncetToDatabase(); // help to connect with database

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World ....This is Home Page...!!",
  });
});

app.post("/blog", upload.single("image"), (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: "Blog api hit successfully...",
  });
});

app.listen(process.env.PORT, () => {
  console.log("Huricane Project is started....");
});
