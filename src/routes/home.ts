// Import Express and create router
import express = require('express')
const router: express.Router = express.Router()

// Import path and chalk (package to style console outputs)
import path = require('path')
import chalk = require('chalk')

// If going to home route, send index.html from views folder as a response
router.get('/', (req: express.Request, res: express.Response) => {
  try {
    res.status(200).sendFile(path.join(__dirname + './../../views/index.html'))
  } catch (error) {
    console.log(chalk.red(error))
  }
})

// Export route
module.exports = router
