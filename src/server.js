require("dotenv").config();
const { app } = require("./app");
const dbconnect = require("./db/dbconnect");

const PORT = process.env.PORT || 6000;

dbconnect().then(()=>{
    app.listen(PORT,()=>{
        console.log("The Server is Listening at Port NO: "+PORT)
    })
    }).catch((error)=>{
        console.error("server not started",error.message)
        process.exit(1)
})