var express = require('express');
var router = express.Router();

// Authorization
const auth = require('../middlewares/auth')
//Controlllers
const seriesController = require('../controllers/seriesController')

/* GET */
router.get('/',auth,seriesController.getAllSeries); // All series
router.get('/detail/:id',auth,seriesController.getSerieDetail); // get serie detail by id
router.get('/detail/:id/:season/:episode',auth,seriesController.getEpisodeDetail); // episode detail with director information
router.get('/detail/:id/:season', auth ,seriesController.getSeasonDetail); // get season detail by season number and id serie
router.get('/search', auth ,seriesController.Search) // get all the series you are looking for by title


module.exports = router;
