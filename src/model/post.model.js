const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    description:{
        type:String,
    },
    image:{
        type:String,
        require:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        require:[true,"bhai kon hai tu"],
        ref:'User'
    }
})

const postModel=mongoose.model("posts",postSchema);

module.exports=postModel;