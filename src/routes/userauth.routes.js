const express=require('express');
const jwt=require('jsonwebtoken');
const cookiePaser=require('cookie-parser');
const userModel = require('../model/user.model');
const { userRegister, userLogin, userLogout } = require('../controllers/userauth.controllers');

const userauth=express();
userauth.use(express.json());
userauth.use(cookiePaser());

userauth.post('/register',userRegister)

userauth.post('/login',userLogin)

userauth.get('/logout',userLogout)

module.exports=userauth;
