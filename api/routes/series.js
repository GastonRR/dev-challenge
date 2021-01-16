
var express = require('express');
var router = express.Router();

// Authorization
const auth = require('../middlewares/auth')
//Controlllers
const seriesController = require('../controllers/seriesController')

/* GET */
router.get('/',auth,seriesController.getAllSeries); // All series
router.get('/detail/:id',auth,seriesController.getSerieDetail); // Detail serie
router.get('/detail/:id/:season/:episode',auth,seriesController.getEpisodeDetail); // Detail episode with director info
router.get('/detail/:id/:season', auth ,seriesController.getSeasonDetail); // detail season with serie info
router.get('/search', auth ,seriesController.Search) // // get all the series it finds with the query string

/* POST */

router.post('/create');






module.exports = router;
