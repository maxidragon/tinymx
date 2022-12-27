const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const path = require('path')
const cors = require('cors')
const bodyParser = require('body-parser')
const {PORT, DB, baseUrl} = process.env
const app = express()
const port = process.env.PORT || 5000
const router = require('./routes/api')

require('./db/mongoose')
app.use(bodyParser.json())
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use('/', router)


app.listen(port, () => {
    console.log('Listening on port ' + port + '...')
})
