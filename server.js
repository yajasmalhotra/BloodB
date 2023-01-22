const express = require('express');
const app = express();

app.set("view engine", "html");

app.get('/', (req, res) => {
    // res.send('Hello World!');
    res.render('index.ejs', { root: '\views' })
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});