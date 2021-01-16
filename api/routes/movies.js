var express = require('express');
var router = express.Router();

// Authorization
const auth = require('../middlewares/auth')

//controller
const moviesController = require('../controllers/moviesController');

/* GET */
router.get('/', auth ,moviesController.getAllMovies); //ALL Movies
router.get('/detail/:id', auth ,moviesController.getDetailMovieId); // get movie detail by id
router.get('/genre/:id', auth ,moviesController.getMoviesGenre); // get all the movies by genre
router.get('/search', auth,moviesController.Search) // get all the movies you are looking for by title




module.exports = router;
