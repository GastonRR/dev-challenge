var express = require('express');
var router = express.Router();

/* GET */
router.get('/');
router.get('/detail/:id');
router.get('/genre/:id');
router.get('/detail/:id/:season/:episode');

/* POST */

router.post('/create');
router.post('/edit/:id');

/* DELETE */
router.delete('/delete/:id');


module.exports = router;
