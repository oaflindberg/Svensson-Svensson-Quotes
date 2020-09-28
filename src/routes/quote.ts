import express = require('express');
const router = express.Router();

const quotes: object[] = require('./../../data/data.json');

const randomQuote = (arr: object[]) => {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

router.get('/quote', (req, res) => {
  try {
    res.send(randomQuote(quotes));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
