const mongoose = require("mongoose");

async function conncetToDatabase() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Database connect successfully...");
}

module.exports = conncetToDatabase;
