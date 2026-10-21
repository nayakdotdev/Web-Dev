const express = require('express');
const birds = require('./routes/birds');
const app = express();
const port = 3000;
const fs = require("fs")

// app.use(express.static("public"))
app.use('/birds', birds);

// Middleware 1
app.use((req, res, next) => {
    console.log(req.headers)
    req.sanket = "hi I am Sanket"
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log(`${Date.now()} is a ${req.method}`);
    // res.send("Hacked by Middleware 1")
    next();
});

// Middleware 2
app.use((req, res, next) => {
    req.sanket = "hi I am Sanket Nayak"
    console.log('m2');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.sanket);
});

app.get('/contact', (req, res) => {
    res.send('Hello contact!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});