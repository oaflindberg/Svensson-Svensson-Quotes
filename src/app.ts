import express = require('express');
const app = express();
let port: number = 3000;

const home = require('./routes/home');
const quotes = require('./routes/quote');

app.use(home);
app.use(quotes);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
