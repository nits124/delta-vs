const {faker} = require("@faker-js/faker");
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'delta',
    password:'jkl;'
});

// let q= "INSERT INTO user(q, username, email,password)VALUES (?,?,?,?)";
// let users =["123","dkfjs","dfjf","dkjdfk"];

try{
    connection.query("show tables",(err,res)=>{
        if(err) throw err;
        console.log(res);
    });
}catch (err){
    console.log(err);
};
connection.end();
let getRandomUser = () =>{
    return{
        id:faker.string.uuid(),
        username:faker.internet.userName(),
        email:faker.internet.email(),
        password:faker.internet.password()
    };
}

