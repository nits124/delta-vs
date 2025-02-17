// 100 fake random users data 

const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app1',
    password: 'jkl;'
});

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}

// let q="SHOW TABLES";
let q = "INSERT INTO user(id, username, email, password)VALUES ?";
let users = [];
for (let i = 1; i< 101; i++) {
    users.push(getRandomUser());
}
try {
    connection.query(q, [users], (err, res) => {
        if (err) throw err;
        console.log(res);
    });
} catch (err) {
    console.log(err);
};
connection.end();

