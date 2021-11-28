// const fs = require('fs');
// const axios = require('axios');

const express = require('express');
const bodyparser = require('body-parser')

const app = express();
app.use(bodyparser.json())

const port = 3001;

let scoreUser;

app.post('/quizz', async (req, res) => {
    // Récuperer data user
    scoreUser = req.query.score;
    res.status(200).send();
});


app.listen(port, () => {
    console.log(`Service listening at http://localhost:${port}`)
})

// const quizz = 'quizz-config.json';

// let data = JSON.parse(fs.readFileSync(quizz));

// data.Quizz.forEach((q) => {
//     console.log(q);
// });

