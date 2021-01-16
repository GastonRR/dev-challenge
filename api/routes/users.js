var express = require('express');
var router = express.Router();

// Authorization
const auth = require('../middlewares/auth')

//Controller
const userController = require('../controllers/usersController')

/* GET */

router.get('/detail/:id', auth ,userController.getUser);

/* POST */

router.post('/SignIn', userController.SignIn);
router.post('/LogIn', userController.LogIn);


module.exports = router;
