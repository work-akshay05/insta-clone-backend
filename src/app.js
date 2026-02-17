const express=require('express');
const userauth = require('./routes/userauth.routes');
const postRoute = require('./routes/posts.routes');

const app=express();
app.use('/api/user',userauth);
app.use('/api',postRoute)

module.exports=app;