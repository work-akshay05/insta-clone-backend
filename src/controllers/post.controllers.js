require('dotenv').config();
const postModel = require('../model/post.model');
const jwt=require('jsonwebtoken')
const multer=require('multer')
const cookieParser=require('cookie-parser');
const imagekit=require('@imagekit/nodejs');
const {toFile}=require('@imagekit/nodejs');
const client=new imagekit({
    privateKey:process.env['IMAGEKIT_PRIVATE_KEY']
});

const createPost=async (req,res)=>{
    
    const id=req.user.id;
    const {description}=req.body;
    const file=req.file;

    const response=await client.files.upload({
    file: await toFile(Buffer.from(file.buffer), 'file'),
    fileName: 'fileName',
    });
    
    const image=response.url;
    const post=await postModel.create({
        description,
        image,
        userId:id
    })

    res.status(201).json({
        message:"post created successfully",
        post
    })
}

const findPosts=async (req,res)=>{
    
    const id=req.user.id;

    const posts=await postModel.find({userId:id});
    res.status(200).json({
        message:"all posts are fetched",
        posts
    })
}

const verifyPost=async (req,res)=>{
    
    const id=req.user.id;
    const postid=req.params.postId;
    const post=await postModel.findById(postid).populate('userId');
    if(post.userId._id.equals(id)){
        res.status(200).json({
            message:"you have the access of this post",
            post
        })
    }else{
        return res.status(401).json({
            message:"you don't have the access of this post"
        })
    }
}

module.exports={
    createPost,
    findPosts,
    verifyPost
}