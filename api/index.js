const express = require('express')

const app = express()
const config = require("./config.json")
const port = process.env.PORT || config.port
const apiRouter = require('./routes/api')

require('./db/mongoose')

app.use('/api/', apiRouter)

app.listen(port, function() {
    console.log('Listening on port ' + port + '...')
})