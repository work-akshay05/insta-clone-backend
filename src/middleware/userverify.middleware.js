const jwt=require('jsonwebtoken');

async function identifer(req,res,next){
    const token=req.cookies.token_id;
    let decoded;
    try{
        decoded=jwt.verify(token,process.env.JWT_SECRET);
    }
    catch{
        return res.status(401).json({
            message:"unauthorised access"
        })
    }

    req.user=decoded;
    next()
}

module.exports=identifer;