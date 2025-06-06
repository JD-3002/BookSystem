const mongoose = require("mongoose")
const {Schema} = mongoose;

const bookSchema = new Schema({
    author:{
        type:String,
    },
    title:{
    type:String
    },
    genre:String,
},
{timestamps:true}
)

const Book = mongoose.model("Book",bookSchema)
module.exports = Book;