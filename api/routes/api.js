const express = require('express')
const router = express.Router()

const urlActions = require('../actions/api/urlActions')

router.post("/shorten", urlActions.createShortUrl)

module.exports = router