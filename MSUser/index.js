const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json())

const port = 3000;

app.post('/user', async (req, res) => {
    // Récuperer data user
    let email = req.query.email;
    let password = req.query.password;
    res.json();
    console.log(email, password);
    res.status(200).send();
})


app.listen(port, () => {
    console.log(`Service listening at http://localhost:${port}`)
})