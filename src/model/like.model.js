const mongoose=require('mongoose')

const likeSchema=new mongoose.Schema({
    postId:{
        type:String,
        require:true
    },
    likedby:{
        type:String,
        require:true
    }
})

const likeModel=mongoose.model('likes',likeSchema);

module.exports=likeModel;