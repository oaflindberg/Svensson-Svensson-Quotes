import express = require('express');
const router = express.Router();
import path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './../../views/index.html'));
});

module.exports = router;
