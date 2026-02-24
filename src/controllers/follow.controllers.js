const followModel=require('../model/follow.model');
const userModel=require('../model/user.model')

const follow=async (req,res)=>{
    const followeename=req.user.userName;
    const followername=req.params.username;


    if(followeename===followername){
        return res.status(409).json({
            message:"you can not follow yourself"
        })
    }
    const isvalid=await userModel.findOne({userName:followername})
    if(isvalid===null){
        return res.status(409).json({
            message:"user doesnot exsist"
        })
    }

    const already=await followModel.findOne({
        followee:followeename,
        follower:followername
    })

    if(already!=null){
        return res.status(400).json({
            message:"you have already followed this account"
        })
    }
    
    const follow=await followModel.create({
        followee:followeename,
        follower:followername
    })

    res.status(200).json({
        message:"follow request sent",
        follow
    })
}
const unfollow =async (req,res)=>{
    const followeename=req.user.userName;
    const followername=req.params.username;

    const presentInDb=await followModel.findOne({
        followee:followeename,
        follower:followername
    })

    if(presentInDb===null){
        res.status(409).json({
            message:"phle follow to kr"
        })
    }
    const del=await followModel.findByIdAndDelete(presentInDb._id);
    res.status(200).json({
        message:`${followername} unfollow successfull` 
    })

}
const pendingList=async (req,res)=>{
    const currUser=req.user.userName;
    const pendingReq=await followModel.find({
        follower:currUser,
        status:"pending"
    })

    console.log(pendingReq);
}
const changestatus=async(req,res)=>{
    const followId=req.params.id;
    console.log(await req.body);
    const {val}=await req.body;
    console.log(val);

    if(val==="1"){
        const accept=await followModel.findByIdAndUpdate(followId,{status:"active"})
        return res.status(200).json({
            message:"accepted the req"
        })
    }
    else {
        const reject=await followModel.findByIdAndDelete(followId);
        return res.status(200).json({
            message:"rejected the req"
        })
    }
}

module.exports={
    follow,
    unfollow,
    pendingList,
    changestatus
}