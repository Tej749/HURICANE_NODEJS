const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    unique: true,
  },
  subtile: {
    type: String,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
});

mongoose.model();

const Blog = mongoose.model("Blog", blogSchema);
module.exports = Blog;
