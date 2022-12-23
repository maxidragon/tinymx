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
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://127.0.0.1:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.listen(port, () => {
    console.log('Listening on port ' + port + '...')
})