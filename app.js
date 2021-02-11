const express = require('express');
// const router = require('router');
const path = require('path');
const app = express();
const port = 8000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => res.render('index'));

app.listen(port, () => console.log(`app listening on port ${port}`));

// module.exports = app;