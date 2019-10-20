var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var request = require('request');
var config = require('./config');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var searchRouter = require('./routes/search');

var app = express();

var options = { method: 'POST',
  url: 'https://api.genesysappliedresearch.com/v2/knowledge/generatetoken',
  headers: 
   { 'cache-control': 'no-cache',
     Connection: 'keep-alive',
     'Content-Length': '0',
     'Accept-Encoding': 'gzip, deflate',
     Host: 'api.genesysappliedresearch.com',
     'Cache-Control': 'no-cache',
     Accept: '*/*',
     'User-Agent': 'PostmanRuntime/7.18.0',
     'secretkey': config.secretKey,
     'organizationid': config.orgId } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  let resBody = JSON.parse(body);
  config.token = resBody.token;
  console.log(config.token);
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/search', searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
