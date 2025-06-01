require("dotenv").config();
const mongoose = require("mongoose");

const MONGODB_URI = process.env.MONGODB_URI
const DBNAME = process.env.DBNAME;

const dbconnect = async () => {
  try {
    await mongoose.connect(`${MONGODB_URI}/${DBNAME}`);
    console.log("MONGODB Connection Successful");
  } catch (error) {
    console.error("MONGODB Connection Failed:", error.message);
  }
};

module.exports = dbconnect;
