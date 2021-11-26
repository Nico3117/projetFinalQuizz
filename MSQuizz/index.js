const fs = require('fs');
const quizz = 'quizz-config.json';

let rawdata = fs.readFileSync(quizz);
let data = JSON.parse(rawdata);

console.log(data);


