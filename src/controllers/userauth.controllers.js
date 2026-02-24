const jwt=require('jsonwebtoken');
const cookiePaser=require('cookie-parser');
const userModel = require('../model/user.model');
const bcrypt=require('bcrypt');


const userRegister=async (req,res)=>{
    const {userName,email,password}=req.body;

    const isAlreadyRegister=await userModel.findOne({
        $or:[
            {email},
            {userName}
        ]
    })

    if(isAlreadyRegister){
        return res.status(409).json({
            message:"bhai teri id hai yaha already"
        })
    }
    const hash=await bcrypt.hash(password,10)
    const user=await userModel.create({
        userName,email,password:hash
    })
    const token=jwt.sign(
        {id:user._id,userName},
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie('token_id',token,{
        httpOnly:true,
        secure:true,
        sameSite:"strict"
    })

    res.status(200).json({
        message:"user store ho geya",
        user
    })
}

const userLogin=async (req,res)=>{
    // hum login krva rahe hai yaa to email daal do yaa fir userID
    const {userName,password}=req.body;

    const userExsist=await userModel.findOne({
        $or:[
            {userName}
        ]
    })

    if(!userExsist){
        return res.status(404).json({
            message:"bhai aap to iss duniya mai ho hi nhi"
        })
    }
    const response=await bcrypt.compare(password,userExsist.password);
    if(!response){
        return res.status(409).json({
            message:"password galat daal die bhaiya ji aap to"
        })
    }
    const token=await jwt.sign(
        {
            id:userExsist._id,
            userName:userName
        },
        process.env.JWT_SECRET,
        {expiresIn:"1d"}
    )

    res.cookie('token_id',token,{
        httpOnly:true,
        secure:true,
        sameSite:"strict"
    })

    res.status(200).json({
        message:"user logedin",
        userExsist
    })
}

const userLogout=async (req,res)=>{
    res.clearCookie('token_id');
    res.status(200).json({
        message:"you are just logedout"
    })
}

module.exports={
    userRegister,
    userLogin,
    userLogout
};

