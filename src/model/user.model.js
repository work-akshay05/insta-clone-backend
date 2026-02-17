const mongoose=require('mongoose');
// just a basic schema of users
const userSchema=new mongoose.Schema({
    userName:{
        type:String,
        require:[true,"UserName to bnana hi parega"],
        unique:[true,"bhai unique de na"]
    },
    email:{
        type:String,
        require:[true,"bhai email dena parega sorry"],
        unique:[true,"bhai unique dia kro yaar"]
    },
    password:{
        type:String,
        require:[true,"bhai password dena parega sorry"],
    },
    dp:{
        type:String,
        default:"https://ik.imagekit.io/ajllp22lh/defaultDP.webp"
    },
    follower:{
        type:Array
    },
    following:{
        type:Array
    },
    bio:{
        type:String,
    }
})

const userModel=mongoose.model("User",userSchema);

module.exports=userModel;