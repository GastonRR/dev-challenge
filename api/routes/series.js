
var express = require('express');
var router = express.Router();

//Controlllers
const seriesController = require('../controllers/seriesController')

/* GET */
router.get('/',seriesController.getAllSeries); // All series
router.get('/detail/:id', seriesController.getSerieDetail); // Detail serie
router.get('/detail/:id/:season/:episode', seriesController.getEpisodeDetail); // Detail episode with director info
router.get('/detail/:id/:season', seriesController.getSeasonDetail); // detail season with serie info
router.get('/search', seriesController.Search) // // get all the series it finds with the query string

/* POST */

router.post('/create');






module.exports = router;
