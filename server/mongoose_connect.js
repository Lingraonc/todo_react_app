require("dotenv").config();
const mongoose = require("mongoose");
const uri = process.env.MONGO_SECRET;

module.exports = function () {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  const connection = mongoose.connection;
  connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
  });
};