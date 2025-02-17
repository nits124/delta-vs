const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));


main()
    .then(() => {
        console.log("connection sucessfull");
    })
    .catch((err) => {
        console.log(err);
    });
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}
//index route
app.get("/chats", async (req, res) => {
    let chats = await Chat.find();
    // console.log(chats);
    res.render("index.ejs", { chats })
})
//NEW ROUTE
app.get("/chats/new", (req, res) => {
    // throw new ExpressError(404, "page not found")
    res.render("new.ejs");
    //after node init.js   ...localhost:8080/chats/new=>page not found
    //404 status is displayed at inspection console
});
///create route
app.post("/chats", async (req, res) => {
    try {
        let { from, to, mssg } = req.body;
        let newChat = new Chat({
            from: from,
            to: to,
            mssg: mssg,
            created_at: new Date(),
        });
        await newChat.save();
        res.redirect("/chats");
    } catch (err) {
        next(err);
    };
});
function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };//this fn act as try catch to all request where this fn is called
}

// new show route
app.get("/chats/:id",asyncWrap(async (req, res, next) => {
     let { id } = req.params;
     let chat = await Chat.findById(id);
     if (!chat) {
         next(new ExpressError(404, "page not found"));
     }//in async throw error not wrk ,we use next() to handle error
     res.render("edit.ejs", { chat });
 }));
 
// app.get("/chats/:id",async (req, res, next) => {
//    try{
//     let { id } = req.params;
//     let chat = await Chat.findById(id);
//     if (!chat) {
//         next(new ExpressError(404, "page not found"));
//     }//in async throw error not wrk ,we use next() to handle error
//     res.render("edit.ejs", { chat });

//    }catch(err){
//     next(err);
//    }
// });


//edit route
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
});
//update route
app.put("/chats/:id", asyncWrap(async (req, res) => {
        let { id } = req.params;
        let { mssg: newmssg } = req.body;
        let updatedchat = await Chat.findByIdAndUpdate(
            id,
            { mssg: newmssg },
            { runValidators: true, new: true });
        console.log(updatedchat);

        res.redirect("/chats");
}));
//destroy route
app.delete("/chats/:id",asyncWrap( async (req, res) => {
        let { id } = req.params;
        let deletedchat = await Chat.findByIdAndDelete(id);
        res.redirect("/chats");
}));
app.get("/", (req, res) => {
    res.send("working");
});

app.use((err,req,res,next)=>{
    console.log(err.name);
    next(err);
});
//error handling middleware  
app.use((err, req, res, next) => {
    let { status = 500, message = "some error occured" } = err;
    res.status(status).send(message);
});
app.listen(8080, () => {
    console.log("server is listening at port 8080");
})
