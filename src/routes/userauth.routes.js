const express=require('express');
const jwt=require('jsonwebtoken');
const cookiePaser=require('cookie-parser');
const userModel = require('../model/user.model');
const { userRegister, userLogin, userLogout } = require('../controllers/userauth.controllers');
const identifer = require('../middleware/userverify.middleware');

const userauth=express();
userauth.use(express.json());
userauth.use(cookiePaser());

userauth.post('/register',userRegister)

userauth.post('/login',userLogin)

userauth.get('/logout',userLogout)

userauth.get('/gettoken',identifer,async(req,res)=>{
    const decoded=req.user.id;
    if(decoded!=null){
        res.status(200).json({
            message:"true"
        })
    }
        res.status(200).json({
            message:"false"
        })
    

})

module.exports=userauth;
