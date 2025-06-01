//created this file for maintaining the code readibilty 
const express = require("express");
const cors = require('cors');

const app = express()

app.use(cors());
app.use(express.json());



const authRoutes = require("./routes/auth.routes")
const bookRoutes = require("./routes/book.routes")
const reviewRoutes = require("./routes/review.routes")

app.use("/api", authRoutes)
app.use("/api",bookRoutes)
app.use("/api",reviewRoutes)


module.exports={app}
