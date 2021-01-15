var express = require('express');
var router = express.Router();

//Controller
const userController = require('../controllers/usersController')

/* GET */

router.get('/detail/:id', userController.getUser);


/* POST */

router.post('/SignIn', userController.SignIn);
router.post('/LogIn', userController.LogIn);


module.exports = router;
