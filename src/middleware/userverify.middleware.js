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

    const token2=req.headers.Authorization;
    if(decoded==null){
        try{
            decoded=jwt.verify(token2,process.env.JWT_SECRET);
        }
        catch{
            return res.status(400).json({
                message:"kuch milega tab to btaunga ya saale kahi tu fake to nhi",
            })
        }
    }

    req.user=decoded;
    next()
}

module.exports=identifer;