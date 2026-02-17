const app=require('./src/app');
const connectUserDb=require('./src/config/user.database');

connectUserDb();

app.listen(3000,()=>{
    console.log("server is up and running at port 3000");
})