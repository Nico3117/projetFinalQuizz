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

let emailValid;

app.post('/login', async (req, res) => {
    // Récupérer data user
    emailUser = req.query.email;
    passwordUser = req.query.password;
    console.log(emailUser, passwordUser);

    pool.getConnection((err, connection) => {
        if(err) throw err;
        connection.query('SELECT * from users', (err, results) => {
            connection.release();
            if(err) throw err;
            results.forEach((f) => {
                if(f.email == emailUser && f.password == passwordUser) {
                    emailValid = f.email;
                }
            });
            if(emailValid == emailUser) {
                console.log(`Le compte ${emailUser} existe`);
                emailValid = '';
                res.status(200).send();
            }else {
                console.log(`Le compte ${emailUser} n'existe pas`);
                emailValid = '';
                res.status(403).send();
            }
        });
    });
});

app.post('/score', async (req, res) => {
    scoreUser = req.body.score;
    quizzName = req.body.quizz;
    console.log(scoreUser, quizzName);
    res.status(200).send();
});

pool.on('connection', function () {
    console.log("Connected");
});

app.listen(port, () => {
    console.log(`Service listening at http://localhost:${port}`);
});