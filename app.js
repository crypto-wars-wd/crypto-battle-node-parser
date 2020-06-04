const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { routes } = require('routes');
const { runStream } = require('processor/processor');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);

runStream().catch((err) => {
  console.log(err);
  process.exit(1);
});

module.exports = app;
