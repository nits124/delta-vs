const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'jkl;'
});
// let q="SHOW TABLES";
let q = "INSERT INTO user(id, username, email, password)VALUES ?";
let users = [
  ["123k", "12l3_newuser", "adfl@gmail.com", "jkll"],
  ["1234", "123_newusear", "adf@gmail.coam", "ajkl"],
];
try {
  connection.query(q, [users], (err, res) => {
    if (err) throw err;
    console.log(res);
  });
} catch (err) {
  console.log(err);
};
connection.end();

let getRandomUser = () => { 
  return {
    id: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
}


