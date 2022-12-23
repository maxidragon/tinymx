const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const config = require("./config.json")
const port = process.env.PORT || config.port
const router = require('./routes/api')

require('./db/mongoose')
app.use(bodyParser.json())
app.use(cors());
app.use('/', router)


app.listen(port, () => {
    console.log('Listening on port ' + port + '...')
})