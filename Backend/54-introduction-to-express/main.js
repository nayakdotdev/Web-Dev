const express = require('express');
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete (path,handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About Us!')
})

app.get('/contact', (req, res) => {
    res.send('Contact Me!')
})

app.get('/blog', (req, res) => {
    res.send('Blog!')
})

app.get(`/blog/:slug`,(req,res)=>{
    // logic to fetch intro-to-js from database
    // For URL: http://127.0.0.1:3000/blog/intro-to-padosi?mode=dark&region=in
    console.log(req.params) // output: { slug: 'intro-to-padosi' }
    console.log(req.query) // output: { mode: 'dark', region: 'in' }
    res.send(`Hello ${req.params.slug}`) 
})
app.get(`/blog/:slug/:second`,(req,res)=>{
    // logic to fetch intro-to-js from database
    res.send(`Hello ${req.params.slug}, and ${req.params.second}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fetch intro-to-js from database
//     res.send('Introduction to JavaScript!')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//     // logic to fetch intro-to-js from database
//     res.send('Introduction to Python!')
// })

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})