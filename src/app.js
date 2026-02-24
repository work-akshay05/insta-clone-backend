const express=require('express');
const userauth = require('./routes/userauth.routes');
const postRoute = require('./routes/posts.routes');
const followRoute = require('./routes/follow.routes');
const cors=require('cors');
const { get } = require('mongoose');

const app=express();
app.use(cors({
    credentials:true,
    origin:"http://localhost:5173",
    methods:["get","post","patch","delete"]
}))
app.use('/api/user',userauth);
app.use('/api',postRoute)
app.use('/api',followRoute)

module.exports=app;