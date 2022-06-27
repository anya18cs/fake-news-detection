const express = require('express')
const app = express()
const apiRouter = require('./routes/api.route')
const indexRouter = require('./routes/index.route')
const bodyParser = require('body-parser')
const path = require('path')

app.listen(5000);
app.use(express.static(__dirname + "/public"));
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({extended: false}));
// app.set('views', 'views/');

app.engine('html', require('ejs').renderFile);
app.set("view engine", "ejs");
app.use('/', indexRouter);
app.use('/api', apiRouter);