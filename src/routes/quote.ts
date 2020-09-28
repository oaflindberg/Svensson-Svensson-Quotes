import express = require('express');
const router = express.Router();

const quotes: object[] = require('./../../data/data.json');

const randomQuote = (arr: object[]) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

router.get('/quote', (req, res) => {
  res.send(randomQuote(quotes));
});

module.exports = router;
