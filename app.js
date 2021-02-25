const express = require('express');
const path = require('path');
const http = require('http');

const app = express();
const indexRouter = require('./routes/index');
const districtsRouter = require('./routes/districts')

const port = 3000;
var server = http.createServer(app);

app.set('port', port);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// app.get('/', (req, res) => res.render('index'));
// app.listen(port, () => console.log(`app listening on port ${port}`));

app.use('/', indexRouter);
app.use('/districts', districtsRouter);

server.listen(port);
