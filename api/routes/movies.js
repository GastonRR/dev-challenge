var express = require('express');
var router = express.Router();

// Authorization
const auth = require('../middlewares/auth')

//controller
const moviesController = require('../controllers/moviesController');

/* GET */
router.get('/', auth ,moviesController.getAllMovies); //ALL Movies
router.get('/detail/:id', auth ,moviesController.getDetailMovieId); // Get MOVIE for ID
router.get('/genre/:id', auth ,moviesController.getMoviesGenre); // Get all Movies with same genre
router.get('/search', auth,moviesController.Search) // get all the movies it finds with the query string




module.exports = router;
