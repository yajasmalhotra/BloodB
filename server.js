const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.send('Hello World!');
    // res.sendFile('views/landing.ejs');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});