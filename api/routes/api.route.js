const express = require('express')
const router= express.Router()
const apiController= require('../controller/api.controller')
router.get('/',apiController.index);
router.fetch('/pushformdetails',apiController.pushFormDetails)
router.get('/webApp',apiController.webApp)

module.exports= router;