let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let morgan = require('morgan');
let chalk = require('chalk');
let routeUtils = require('express-recursive-routes');
let expressHbs = require('express-handlebars');
let moment = require('moment');
let hbs = require('hbs')

let app = express(); // initializing main express application

hbs.registerHelper('equals', function(arg1, arg2, options) {
  return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
});

// view engine setup
app.set('views', path.join(__dirname, 'views')); // setting dieectory for my views
app.set('view engine', 'hbs'); // setting view engine to hbs (handlebars)

app.engine("hbs", expressHbs.engine(
    {
        layoutsDir: "views/layouts", 
        defaultLayout: "layout",
        extname: "hbs"
    }
))

app.use(morgan((tokens, req, res) => {
  return [
    chalk.green(tokens.status(req, res)),
    chalk.green.bgBlack.bold(tokens.method(req, res)),
    chalk.blue.bgBlack.underline(tokens.url(req, res)),
    chalk.white.bgBlack.inverse(tokens['response-time'](req, res) + 'ms'),
    "\n",
    chalk.cyan(moment().format('MMMM Do YYYY, h:mm:ss a')),
    "\n\x1b[36m--------------------------------------------\x1b[0m\n",
  ].join(' ');
})); // logger for development pur'web'

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // to parse users cookies
app.use(express.static(path.join(__dirname, 'public'))); // put all handled and public-ready documents to publis folder
app.use(express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use(express.static(__dirname + '/node_modules/bootstrap-icons/font/'));


routeUtils.mountRoutes(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  
  descriptions = {
    401: "unauthorized means that data you trying to access is not available for you unless you authorize there.",
    404: "data you trying to access is not found, it means that data you looking for doesn't exist.",
    500: "internal server error means that error was occured on internal side of web server, it's not your fault, just try again later, we're already working on it.",
    502: "invalid argument or bad gateway, it's internal server error, we're working on it already",
    403: "forbidden, data you're trying to access is not available for you, because it's protected from unwanted eyes, sorry."
  }

  // render the error page
  res.status(err.status || 500);
  res.render('error', { msg: descriptions[err.status] || "unknown error occured 🤷‍♂️" , msgstatus : err.status });
  console.error(err.stack)
});

module.exports = app;
