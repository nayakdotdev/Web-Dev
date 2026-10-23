// https://ejs.co/docs/#getting-started
// https://getbootstrap.com/docs/6.0/getting-started/install/

const express = require('express');
const app = express();
const port = 3000;

app.set('view engine','ejs')

app.get('/', (req, res) => {
    let siteName="Adidas"
    let searchText="Search Now"
    let arr=[1,54,65]
    res.render("index",{siteName:siteName,searchText:searchText,arr})
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});