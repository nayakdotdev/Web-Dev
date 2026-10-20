const express = require('express');
const blog = require('./routes/blog');
const shop = require('./routes/shop');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

app.use(express.static("public"))
app.use('/blog', blog);
app.use('/shop', shop);

app.get('/', (req, res) => {
    console.log("this is a GET Request")
    res.send('Hello World!');
}).post('/', (req, res) => {
    console.log("this is a POST Request")
    res.send('Hello World post!');
}).put('/', (req, res) => {
    console.log("this is a PUT Request")
    res.send('Hello World put!');
});

app.get('/index', (req, res) => {
    console.log("this is a index")
    res.sendFile('templates/index.html',{root:__dirname});
});

app.get('/api', (req, res) => {
    res.json({a:1,b:2,c:3,name:["sanket","nayak"]});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});