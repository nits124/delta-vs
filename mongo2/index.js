const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
// npm install method-override
// When building a web application with MongoDB, Express.js, and Node.js (MEN stack or MERN stack with React), you might need to update or delete database records.
// Since HTML forms don't support PUT or DELETE methods, method-override lets you fake these methods using _method in the request.

const ExpressError = require("./ExpressError")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));// Use method-override to allow PUT and DELETE requests via POST requests

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
    //     Chat.find() queries the MongoDB database for all chat messages.
    // await ensures that the query completes before moving to the next line.
    // The result is stored in chats, which is an array of chat documents.
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
    //This sets up a POST route at /chats, meaning it handles form submissions or API requests that send chat messages.
    // The async keyword allows the use of await inside the function.
    try {
        let { from, to, mssg } = req.body;
        //req.body is an object that contains the data sent by the client in the request body.
        //Extracts the from, to, and mssg (message) fields from the request body (req.body).
        //         req.body; Used in: POST, PUT, DELETE requests
        // Data source: Request body (sent by form, JSON, or raw data)
        {/* <form action="/submit" method="POST">
<input type="text" name="name" value="John" />
app.post("/submit", (req, res) => {
    console.log(req.body); // { name: 'John', age: '25' }
    res.send(`Received ${req.body.name}, age ${req.body.age}`); */}

        //Assumes the request contains data in URL-encoded or JSON format, so you must have:
        // app.use(express.urlencoded({ extended: true }));
        // app.use(express.json());


        let newChat = new Chat({//Creates a new chat document using the Chat Mongoose model.
            from: from,
            to: to,
            mssg: mssg,
            created_at: new Date(),
        });
        await newChat.save();
        res.redirect("/chats");
    } catch (err) {
        next(err);
        // If something goes wrong (e.g., database connection issues), the error is passed to the next middleware using next(err).
        // Fix needed: next is not defined in your function. You should pass it as a parameter:
        // app.post("/chats", async (req, res, next) => {
    };
});
function asyncWrap(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch((err) => next(err));
    };//this fn act as try catch to all request where this fn is called
}
// ❌ Bina asyncWrap	Har route me try...catch likhna padta hai         	Code bohot lamba ho jata hai
// ✅ asyncWrap Use Karke	Automatically errors handle ho jate hain	Code clean aur short ho jata hai

// app.get("/users", async (req, res, next) => {
//     try {
//         let users = await User.find();
//         res.json(users);
//     } catch (err) {
//         next(err); // Error ko handle karne ke liye manually pass karna padta hai without asyncWrap
//---------------------------------------------------
// asyncWrap(fn) ek function leta hai (jo async route handler hota hai).
// Ye naya function return karta hai jo:
// fn(req, res, next) ko execute karega.
// Agar koi error aaya to .catch(next) us error ko Express ke error handler ko pass kar dega. ya next(err) call hoga, aur Express ka error middleware use hoga.
// asyncWrap automatically error handle karega.

// asyncWrap Se Error Kahan Se Aayega?
// Database error (e.g., MongoDB connection fail ho gaya)
// Network error (e.g., external API call fail ho gaya)
// Server-side validation error (e.g., req.body missing fields)
//---------------------------------------------------
// app.get("/users", asyncWrap(async (req, res) => {
//     let users = await User.find();  // Yeh MongoDB se data fetch karega
//     res.json(users);  // Response send karega
// }));
// Yahan koi try...catch nahi hai!
// asyncWrap automatically .catch() karega aur next(err) ko call karega


// new show route
app.get("/chats/:id", asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
        next(new ExpressError(404, "page not found"));
    }//in async throw error not wrk ,we use next() to handle error, avoid try catch using
    res.render("edit.ejs", { chat });
}));

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
app.delete("/chats/:id", asyncWrap(async (req, res) => {
    let { id } = req.params;
    let deletedchat = await Chat.findByIdAndDelete(id);
    res.redirect("/chats");
}));
app.get("/", (req, res) => {
    res.send("working");
});
app.use((err, req, res, next) => {
    console.log(err.name);
    next(err);
});
//asyncWrap error ko catch karke Express middleware ko de deta hai (next(err)).
// app.use ki help se middleware error ko response me convert karega, jisse user ko error dikhega!
// Isliye error-handling middleware zaroori hai, jo error ko format karke user ko bhej sake.

// app.get("/error", asyncWrap(async (req, res) => {-----asyncWrap next(err) call karega.
// Lekin koi bhi middleware error ka response nahi bhej raha.
// Result: Server crash ho sakta hai ya browser infinite loading dikhayega!

// app.use((err, req, res, next) => {console.log("Error:", err.message);  // Debugging ke liye error console me dikhayenge


//error handling middleware  
app.use((err, req, res, next) => {
    let { status = 500, message = "some error occured" } = err;
    res.status(status).send(message);
});
app.listen(8080, () => {
    console.log("server is listening at port 8080");
})

// Scenario	      req.query  req.body
// Search filters	✅ Yes	❌ No
// Form submission	❌ No	     ✅ Yes
// API sending JSON	❌ No	        ✅ Yes
// Retrieving data via URL	✅ Yes	       ❌ No
// Sending login credentials.❌ No (insecure)	✅ Yes