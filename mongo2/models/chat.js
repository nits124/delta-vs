const mongoose = require("mongoose");

const chatSchema =new mongoose.Schema({
    from : {type:String,
        required:true,
    },
    to:{
        type:String,
        required:true,
    },
    mssg:{
        type:String,
        maxLength:"44",
    },
    created_at:{
        type:Date,required:true
    },
});
const Chat= mongoose.model("Chat", chatSchema);
module.exports=Chat;
// mongoose.model("Chat", chatSchema);-----eh MongoDB me "Chat" naam ka model create kar raha hai.
// MongoDB automatically iska plural bana dega, aur database me "chats" collection ban jayega.

// chat variable jo mongoose.model() ka result store kar raha hai.
// Ab Chat variable ko use karke database operations kar sakte hain, jaise .find(), .save(), .deleteOne().

