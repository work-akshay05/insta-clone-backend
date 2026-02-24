const mongoose=require('mongoose')

const followSchema=new mongoose.Schema({
    follower:{
        type:String,
        require:true
    },
    followee:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum:["pending","active","reject"],
        default:"pending"
    }
},{timestamps:true})

const followModel=mongoose.model('follow',followSchema);

module.exports=followModel;

