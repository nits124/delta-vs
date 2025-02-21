const mongoose = require("mongoose");//used in a Node.js environment to import the Mongoose library into the current file

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test");
}
main()//this likely refers to an asynchronous function called main , used to connect to MongoDB.
    .then(() => {
        console.log("connection succesfull");
    })
    .catch((err) => console.log(err));

const userSchema = new mongoose.Schema({  // creates a new schema definition using Mongoose’s Schema constructor.specifying the structure and any validation rules.
    name: {
        type :String,
        maxLength:9, 
    },
    email: String,   //store a string, but no specific constraints like length or format are provided here (you might want to add validation for email format
    age: {
        type :Number,
        default:33,
        min:[1,"age must greater than one"],
    },
    // defines a validation rule that the value of age must be greater than or equal to 1. If a value less than 1 is provided, the error message "age must greater than one" will be returned.
});
const User = mongoose.model("User", userSchema);
//mongoose.model() is a Mongoose function that creates a model.It allows you to interact with the MongoDB database by creating, reading, updating, and deleting documents based on the schema definition.
//first argument "User" is the name of the model.Mongoose will automatically convert this name to the name of the collection in MongoDB. "users" (in lowercase and plural form).
//userSchema is the schema that defines the structure and validation rules for the documents in the "users" collection.
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

