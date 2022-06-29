const express = require("express");
const request = require("request")
const _ = require('lodash')
const index = (req, res) => {
    res.send('/api was hit');
}

const pushFormDetails = (req, res, next ) => {
    var webBody = {
        newsId: req.body || "The response from web came out Empty"
    }
    var url = 'http://127.0.0.1:5000/api';
    if (_.isEmpty(_.get(webBody, ['newsId','title'])) || _.isEmpty(_.get(webBody, ['newsId','description']))){
        res.render('results',{body: "Empty Title or Description"})
        res.next();
    }
    var options = {
        method: 'POST',
        body: webBody,
        json: true,
        url: url
    }
    request(options, (error, response, body) => {
        console.log("Making request");
        console.log(body.data.Authenticity)
        res.render('results', {body: body.data.Authenticity})
    })
    // res.status(200).json(obj)
}

const webApp = (req, res, next) => {
    res.render('index')
}

module.exports = {
    index: index,
    pushFormDetails: pushFormDetails,
    webApp: webApp
}