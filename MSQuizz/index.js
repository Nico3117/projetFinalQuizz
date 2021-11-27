// const fs = require('fs');
// const axios = require('axios');
const express = require('express');
const bodyparser = require('body-parser')

const app = express();
app.use(bodyparser.json())

const port = 3001;

const start = async () => {
    console.log("toto");
}

app.listen(port, () => {
    console.log(`Service listening at http://localhost:${port}`)
    start();
})

// const quizz = 'quizz-config.json';

// let data = JSON.parse(fs.readFileSync(quizz));

// data.Quizz.forEach((q) => {
//     console.log(q);
// });

