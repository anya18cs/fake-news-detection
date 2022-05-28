const express = require('express')
const app = express()
const apiRouter = require('./routes/api.route')
const indexRouter = require('./routes/index.route')
const bodyParser = require('body-parser')

app.listen(5000);
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', indexRouter);
app.use('/api', apiRouter);