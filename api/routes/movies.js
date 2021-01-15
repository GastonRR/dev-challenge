
var express = require('express');
var router = express.Router();

//controller
const moviesController = require('../controllers/moviesController');

/* GET */
router.get('/',moviesController.getAllMovies); //ALL Movies
router.get('/detail/:id', moviesController.getDetailMovieId); // Get MOVIE for ID
router.get('/genre/:id', moviesController.getMoviesGenre); // Get all Movies with same genre
router.get('/search', moviesController.Search) // get all the movies it finds with the query string

/* Post */

router.post('/create');



module.exports = router;
