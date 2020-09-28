import express = require('express');
const router: express.Router = express.Router();
const quotes: object[] = require('./../../data/data.json');
import chalk = require('chalk');

const randomQuote = (arr: object[]) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

router.get('/quote', (req: express.Request, res: express.Response) => {
  try {
    res.status(200).send(randomQuote(quotes));
  } catch (error) {
    console.log(chalk.red(error));
  }
});

module.exports = router;
