const express = require("express")
const index = (req, res) => {
    res.send('/api was hit');
}

const pushFormDetails = (req, res, next ) => {
    var obj = {
        newsId: req.body || "The response from web came out Empty"
    }
    res.status(200).json(obj)
}

const webApp = (req, res, next) => {
    res.render('index')
}

module.exports = {
    index: index,
    pushFormDetails: pushFormDetails,
    webApp: webApp
}