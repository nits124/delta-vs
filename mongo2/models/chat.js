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