const express = require('express')
const router= express.Router()
const apiController= require('../controller/api.controller')
router.get('/',apiController.index);
router.get('/pushformdetails',apiController.pushFormDetails)


module.exports= router;