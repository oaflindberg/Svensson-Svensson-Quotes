// Import and config dotenv to use .env variables
require('dotenv').config()

// Import Express, chalk (package to style console outputs) and cors
import express = require('express')
import chalk = require('chalk')
import cors = require('cors')

// Create app and use port from .env file if avaiable or set port to 3000
const app: express.Application = express()
let port = process.env.PORT || 3000

// Import home and quotes route from routes folder
const home = require('./routes/home')
const quotes = require('./routes/quote')

// Tell app to use cors and the routes imported
app.use(cors())
app.use(home)
app.use(quotes)

// Tell app to listen to port and console.log that the app is running
app.listen(port, () => {
  console.log(chalk.blue(`App listening on port http://localhost:${port}`))
})
