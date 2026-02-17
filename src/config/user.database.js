require('dotenv').config();
const mongoose=require('mongoose');

const connectUserDb=()=>{
    mongoose.connect(`${process.env.MONGO_URI}user`)
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    })
}

module.exports=connectUserDb;