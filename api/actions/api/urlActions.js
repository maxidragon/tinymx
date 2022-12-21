const express = require('express')
const validUrl = require('valid-url')
const shortid = require('shortid')

const Url = require('../../db/models/URL')
const config = require("../../config.json")
const baseUrl = config.baseUrl

class UrlActions {
    async createShortUrl(req, res) {
        const longUrl = req.body.longUrl
        if (!validUrl.isUri(baseUrl)) {
            return res.status(401).json('Invalid base URL')
        }
        const shortUrlCode = shortid.generate()
        if (validUrl.isUri(longUrl)) {
            try {
                let url = await Url.findOne({
                    longUrl
                })

                if (url) {
                    res.status(200).json(url)
                }
                else {
                    const shortUrl = baseUrl + '/' + urlCode
                    url = new Url({
                        longUrl,
                        shortUrl,
                        urlCode,
                        date: new Date()
                    })
                    await url.save()
                    res.status(200).json(url)
                }
            }
            catch (err) {
                console.log(err)
                res.status(500).json('Server Error')
            }
        } else {
            res.status(401).json('Invalid long url')
        }
    }
}

module.exports = new UrlActions()