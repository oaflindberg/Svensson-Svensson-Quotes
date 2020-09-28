require('dotenv').config();
import express = require('express');
const app = express();
import chalk = require('chalk');
let port = process.env.PORT || 3000;

app.use(express.static('views'));
app.use('/', express.static('views'));

// const home = require('./routes/home');
const quotes = require('./routes/quote');

// app.use(home);
app.use(quotes);

app.listen(port, () => {
  console.log(chalk.blue(`App listening on port http://localhost:${port}`));
});
