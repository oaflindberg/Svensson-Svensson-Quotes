// Import Express and create router
import express = require('express')
const router: express.Router = express.Router()

// Interface for quotes
interface Quote {
  quote: string
}

// Import quotes from datajson inside data folder
const quotes: Quote[] = require('./../../data/data.json')

// Import chalk (package to style console outputs)
import chalk = require('chalk')

// Function to pick a random quote from the data.json file imported above
const randomQuote = (arr: object[]): object => {
  let randomIndex: number = Math.floor(Math.random() * arr.length)
  return arr[randomIndex]
}

// If going to /quote, send a random quote as a response
router.get('/quote', (req: express.Request, res: express.Response) => {
  try {
    res.status(200).send(randomQuote(quotes))
  } catch (error) {
    console.log(chalk.red(error))
  }
})

// Export route
module.exports = router
