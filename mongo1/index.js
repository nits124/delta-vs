const mongoose = require("mongoose");
main()
    .then(() => {
        console.log("connection succesfull");
    })
    .catch((err) => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
const userSchema = new mongoose.Schema({
    name: {
        type :String,
        maxLength:9, 
    },
    email: String,
    age: {
        type :Number,
        default:33,
        min:[1,"age much greater than one"],
    },
});
const User = mongoose.model("User", userSchema);

const user2= new User({
    name: "e4dr7l",
    age: 0,
});
user2
    .save()
    .then((res) => {
        console.log(res);
    })
    .catch((err)=>{
        console.log(err.errors.age.properties.message);   
    });
// -------------------------------------------
// User.insertMany([
//     {name:"jdf",age:33},
//     {name:"eee",age:33},{name:"jdf",age:33},
// ]).then((res)=>{
//     console.log(res);
// });
// -------------------------

// User.find({})
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => console.log(err));
// ---------------------------------------
// User.find({age:{$gt:22}})
// // User.findOne({age:{$gt:22}})
// // User.findOne({_id:"66c71ef87bd23b0f2d1d9b04"})
// // User.findById({"66c71ef87bd23b0f2d1d9b04"})
// .then((res) => {
//     console.log(res);
//     // console.log(res[0].name);
//     // console.log(res[0]);
// })
// .catch((err) => console.log(err));
// --------------------------------------
// User.updateOne({name:"jdf",age:22})
// // User.findOneAndUpdate({name:"jdf",age:32},{new:true},{runValidators:true})
// // User.updateMany({age:{$gt:22}},{age:22}) 
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => console.log(err));
// ----------------------------
// User.deleteMany({age:32}).then((res) => {
// // User.findByIdAndDelete({"66c71c41ac96a64e0b2d04a0"}).then((res) => {
// // User.findOneAndDelete({age:32}).then((res) => {
//     console.log(res);
// })

