let morgan = require('morgan');
let chalk = require('chalk');

const morganMiddleware = morgan((tokens, req, res) => {
  return [
    tokens.status == 200 ? chalk.bgGreen(tokens.status(req, res)) : chalk.bgRed(tokens.status(req, res)),
    chalk.green.bold(tokens.method(req, res)),
    chalk.blue.underline(tokens.url(req, res)),
    chalk.inverse(tokens['response-time'](req, res) + 'ms'),
    "\n\x1b[36m--------------------------------------------\x1b[0m\n",
    chalk.bgCyan.dim(tokens.date(req, res)),
  ].join(' ');
});

module.exports = morganMiddleware;