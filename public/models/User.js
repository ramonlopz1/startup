const mongoose=require("mongoose"),userSchema=new mongoose.Schema({username:{type:String,required:!0,unique:!0},email:{type:String,required:!0,unique:!0},password:{type:String,required:!0},isAdmin:{type:Boolean,default:!1}},{timestamps:!0});module.exports=mongoose.model("User",userSchema);