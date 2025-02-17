const mongoose = require("mongoose");
const {Schema} = mongoose;
main()
.then(()=> console.log("connection successful"))
.catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/relationDemo');
}

const userSchema = new Schema({
    username : String,
    address: [
        {
            _id:false,     // not create id by default
            location: String,
            city: String,
        },
    ],
});
const User = mongoose.model("User",userSchema);
const addUsers = async()=>{
    let user1 = new User({
        username: "sherlockholmes",
        addresses:[
           { 
            location: "fkjdjfkd",
            city:"fjkdfjkd",
        },
        ],
    });
    user1.address.push({location:"jdsnjn", city:"kdjdk"});
    let result = await user1.save();
    console.log(result);
};
addUsers();
