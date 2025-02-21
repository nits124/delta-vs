const express= require("express");
const app = express();
const ExpressError= require("./ExpressError");//this constructor made in expresserror.js file
// In the ExpressError class, you typically extend the built-in Error class in JavaScript.
// You can add custom properties, such as an HTTP status code (like 400 for Bad Request, 404 for Not Found, etc.), which can be used in your error-handling middleware to control the response.

const checktoken= (req,res,next)=>{
    let {token} = req.query;
//     Getting data from the URL query string.
// Format: ?key=value&key2=value2

//  /search?category=books&page=2
//     console.log(req.query); // { category: 'books', page: '2' }
//     res.send(`Searching in category: ${req.query.category}, Page: ${req.query.page}`);           https://student.uuonline.in/Login.aspx

    if (token ==="giveaccess"){//check chrome as localhost:8080\api   n ....api?token=giveaccess
        next();//it calls next(), allowing the request to proceed to the next middleware or route
    }
    // throw new Error("access denied");//localhost:8080/api?token=giveaccessfref  -access denied
    throw new ExpressError(401,"access denied");//localhost:8080\api => access denied  ////HTTP status code, making error handling cleaner.
};
app.get("/api",checktoken,(req,res)=>{
    res.send("data");
});
                                                   
app.get("/err",(req,res)=>{
    asdf=asdf;
});
app.use((err,req,res,next)=>{
    // console.log(err);// by server sttmt error
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