require('dotenv').config();
import express = require('express');
const app = express();
import chalk = require('chalk');
import cors = require('cors');
let port = process.env.PORT || 3000;

const home = require('./routes/home');
const quotes = require('./routes/quote');

app.use(cors());
app.use(home);
app.use(quotes);

app.listen(port, () => {
  console.log(chalk.blue(`App listening on port http://localhost:${port}`));
});
