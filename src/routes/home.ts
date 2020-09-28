import express = require('express');
const router = express.Router();
import path = require('path');

router.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname + './../../views/index.html'));
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
