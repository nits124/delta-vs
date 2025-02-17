const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

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

let allchats = [
    {
        from: "neha",
        to: "priya",
        mssg: "send me your exam shhjhjeet.",
        created_at: new Date(),
    },
    {
        from: "neha",
        to: "priya",
        mssg: "send me your exam sheet.",
        created_at: new Date(),
    },
    {
        from: "neha",
        to: "priya",
        mssg: "send me your exam sheet.",
        created_at: new Date(),
    },
    {
        from: "neha",
        to: "priya",
        mssg: "send me your exam sheet.",
        created_at: new Date(),
    },
]
Chat.insertMany(allchats);
