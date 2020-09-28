import express = require('express');
const router = express.Router();
import path = require('path');
import chalk = require('chalk');

router.get('/', (req, res) => {
  try {
    res.status(200).sendFile(path.join(__dirname + './../../views/index.html'));
  } catch (error) {
    console.log(chalk.red(error));
  }
});

module.exports = router;
