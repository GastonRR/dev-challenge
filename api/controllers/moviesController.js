// DB MODEL MOVIE
const { Movie } = require('../database/models');

// Operators Sequelize
const Op = require('Sequelize').Op;

// controllers Routes 

const getAllMovies = async (req, res, next) =>{

    try {
        const movies = await Movie.findAll();
        res.status(200).json({
            status: "OK",
            msg: "MOVIES_FOUND",
            endpoint: '/api.movies/',
            method: "GET",
            data: {
                type: "Movies",
                data: movies
            }
        });

    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            msg: "ERROR_SERVER",
            endpoint: '/api.series/',
            method: "GET",
            data: error
        })
    }
}

const getDetailMovieId = async (req, res, next) =>{

    try {
        const movie = await Movie.findOne({
            include: [
                {
                    association: "Director"
                },
                {
                    association: "Actors"
                }
            ],
           where:{id: req.params.id}
        });
        res.status(200).json({
            status: "OK",
            msg: "MOVIES_FOUND",
            endpoint: `/api.movies/detail/${req.params.id}`,
            method: "GET",
            data: {
                type: "Movie",
                data: movie
            }
        });

    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            msg: "ERROR_SERVER",
            endpoint: `/api.movies/detail/${req.params.id}`,
            method: "GET",
            data: error
        })
    }
}
const getMoviesGenre = async (req, res, next) =>{

    try {
        const movie = await Movie.findAll({
            include: [
                {
                    association: "Genre",
                },
                {
                    association: "Director"
                },
                {
                    association: "Actors"
                }
            ],
            where:{ idGenre: req.params.id}
        });
        res.status(200).json({
            status: "OK",
            msg: "MOVIES_FOUND",
            endpoint: `/api.movies/genre/${req.params.id}`,
            method: "GET",
            data: {
                type: "Movie",
                data: movie
            }
        });

    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            msg: "ERROR_SERVER",
            endpoint: `/api.movies/genre/${req.params.id}`,
            method: "GET",
            data: error
        })
    }
}
const Search = async (req, res, next) =>{

    try {
        const movies = await Movie.findAll({
            include: [
                {
                    association: "Director"
                },
                {
                    association: "Actors"
                }
            ],
           where:{ title:{[Op.like]:`%${req.query.title}%`}}
        });

        if(movies.length == 0){

           return res.status(404).json({
                status: "ERROR",
                msg: "MOVIES_NOT_FOUND",
                endpoint: `/api.movies/search?title=${req.query.title}`,
                method: "GET",
                data: {
                    type: "Movie",
                    data: movies
                }
            });
        }
        res.status(200).json({
            status: "OK",
            msg: "MOVIES_FOUND",
            endpoint: `/api.movies/search?title=${req.query.title}`,
            method: "GET",
            data: {
                type: "Movie",
                data: movies
            }
        });

    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            msg: "ERROR_SERVER",
            endpoint: `/api.movies/search?title=${req.query.title}`,
            method: "GET",
            data: error
        })
    }
}


module.exports ={
    getAllMovies,
    getDetailMovieId,
    getMoviesGenre,
    Search
}