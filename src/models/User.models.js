const mongoose = require("mongoose");
const { Schema } = mongoose;
const bcrypt = require("bcrypt")

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true})

userSchema.pre("save",async function(next){
     if(!this.isModified("password")) return next();

     this.password = await bcrypt.hash(this.password,10)
     next();
})

userSchema.methods.comparePassword = async function (inputpass){
    return await bcrypt.compare(inputpass,this.password);
}

const User = mongoose.model("User",userSchema)
module.exports=User