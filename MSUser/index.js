const express = require('express');
const bodyparser = require('body-parser');
var mysql = require('mysql');

const app = express();
app.use(bodyparser.json());

const port = 3000;

const pool  = mysql.createPool({
    host            : 'localhost',
    user            : 'root',
    password        : '',
    database        : 'dbusergame'
});

var emailUser;
var passwordUser;

app.post('/user', async (req, res) => {
    // Récupérer data user
    emailUser = req.query.email;
    passwordUser = req.query.password;
    res.status(200).send();
    console.log(emailUser, passwordUser);
});

console.log('2', emailUser, passwordUser);

pool.on('connection', function () {
  console.log("Connected");
});

pool.getConnection((err, connection) => {
  if(err) throw err;
  connection.query('SELECT * from users', (err, fields) => {
      connection.release();
      if(err) throw err;
      console.log(fields);
  });
});

app.listen(port, () => {
    console.log(`Service listening at http://localhost:${port}`);
});