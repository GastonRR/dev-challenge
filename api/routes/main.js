var express = require('express');
var router = express.Router();

//Controller
const mainController = require('../controllers/mainController')

/* POST*/
router.post('/new/:object', mainController.Create)

module.exports = router;
