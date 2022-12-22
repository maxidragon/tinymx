const express = require('express')

const app = express()
const config = require("./config.json")
const port = process.env.PORT || config.port
const router = require('./routes/api')
const redirectRouter = require('./routes/api')

require('./db/mongoose')
app.use(express.json({
    extended: false
}))
app.use('/', router)

app.listen(port, () => {
    console.log('Listening on port ' + port + '...')
})