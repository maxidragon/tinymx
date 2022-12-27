const express = require('express')
const router = express.Router()
const path = require('path')

const urlActions = require('../actions/api/urlActions')

router.get("/:code", urlActions.redirectToUrl)
router.post("/shorten", urlActions.createShortUrl)
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})

module.exports = router