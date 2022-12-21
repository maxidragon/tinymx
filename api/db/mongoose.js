const mongoose = require('mongoose')
const config = require("../config.json")
const connectionString = config.connectionString

const URL = require('./models/URL')

//connect to db
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})