const express= require("express");
const app = express();
const ExpressError= require("./ExpressError");//this constructor made in expresserror.js file


const checktoken= (req,res,next)=>{
    let {token} = req.query;
    if (token ==="giveaccess"){//check chrome as localhost:8080\api   n ....api?token=giveaccess
        next();
    }
    // throw new Error("access denied");//localhost:8080/api?token=giveaccessfref  -access denied
    throw new ExpressError(401,"access denied");//localhost:8080\api => access denied
};
app.get("/api",checktoken,(req,res)=>{
    res.send("data");
});
                                                   
app.get("/err",(req,res)=>{
    asdf=asdf;
});
app.use((err,req,res,next)=>{
    // console.log(err);// byserver sttmt error
    // res.send(err); 
    // res.send("error defined by user");//localhost:8080/err =>error defined by user
    let {status=500,message="some error occured"} =err;
    res.status(status).send(message);
});
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"access to admin is forbidden");
});//Error: access to admin is forbidden
// at C:\Users\RITESH SINGH\Desktop\de......about 11lines

app.get("/",(req,res)=>{
    res.send("i am root");
});
app.get("/random",(req,res)=>{
    res.send("this is random page.");
});

app.listen(8080,()=>{
    console.log("server is listening at port 8080");
});