var express = require('express');
var router = express.Router();

// Authorization
const auth = require('../middlewares/auth')

//Controller
const mainController = require('../controllers/mainController') 

/* POST*/
router.post('/new/:object', auth ,mainController.Create) // endpoint for create any entity

module.exports = router;
