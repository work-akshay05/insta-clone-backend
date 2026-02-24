require('dotenv').config();
const express=require('express');
const postModel = require('../model/post.model');
const jwt=require('jsonwebtoken')
const multer=require('multer')
const cookieParser=require('cookie-parser');
const imagekit=require('@imagekit/nodejs');
const {toFile}=require('@imagekit/nodejs');
const userModel = require('../model/user.model');
const postController=require('../controllers/post.controllers')
const identifer=require('../middleware/userverify.middleware');
const likeModel = require('../model/like.model');

const postRoute=express();
postRoute.use(cookieParser());
postRoute.use(express.json());
const upload=multer({storage:multer.memoryStorage()})
const client=new imagekit({
    privateKey:process.env['IMAGEKIT_PRIVATE_KEY']
});



postRoute.post('/post',identifer,upload.single('image'),postController.createPost);

postRoute.get('/posts',identifer,postController.findPosts)

postRoute.post('/post/:postId',identifer,postController.verifyPost)

postRoute.post('/post/like/:postid',identifer,postController.likecontroller)

module.exports=postRoute;