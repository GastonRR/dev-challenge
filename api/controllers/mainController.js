const service = require('../services'); // jwt\
const createFunctions = require('./createFunctions')


const Create = async (req, res, next) => {
    switch (req.params.object) {
        case 'genre':
            try {
                const genre = await createFunctions.Genre(req.body);
                res.status(200).json({
                    status: "OK",
                    msg: "correct_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: {
                        type: req.params.object,
                        genre: genre
                    }
                })

            } catch (error) {
                console.log(error);
                res.status(500).json({
                    status: "ERROR",
                    msg: "incorrect_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: error
                })
            }
            break;
        case 'season':
            try {
                const season = await createFunctions.Season(req.body);
                res.status(200).json({
                    status: "OK",
                    msg: "correct_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: {
                        type: req.params.object,
                        season: season
                    }
                })

            } catch (error) {
                console.log(error);
                res.status(500).json({
                    status: "ERROR",
                    msg: "incorrect_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: error
                })
            }
            break;
        case 'episode':
            try {
                const episode = await createFunctions.Episode(req.body);
                res.status(200).json({
                    status: "OK",
                    msg: "correct_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: {
                        type: req.params.object,
                        episode: episode
                    }
                })

            } catch (error) {
                console.log(error);
                res.status(500).json({
                    status: "ERROR",
                    msg: "incorrect_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: error
                })
            }
            break;
        case 'actor':
            try {
                const actor = await createFunctions.Actor(req.body);
                res.status(200).json({
                    status: "OK",
                    msg: "correct_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: {
                        type: req.params.object,
                        actor: actor
                    }
                })

            } catch (error) {
                console.log(error);
                res.status(500).json({
                    status: "ERROR",
                    msg: "incorrect_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: error
                })
            }
            break;
        case 'director':
            try {
                const director = await createFunctions.Director(req.body);
                res.status(200).json({
                    status: "OK",
                    msg: "correct_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: {
                        type: req.params.object,
                        director: director
                    }
                })

            } catch (error) {
                console.log(error);
                res.status(500).json({
                    status: "ERROR",
                    msg: "incorrect_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: error
                })
            }
            break;
        case 'movie':
            try {
                const movie = await createFunctions.Movie(req.body);
                res.status(200).json({
                    status: "OK",
                    msg: "correct_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: {
                        type: req.params.object,
                        movie: movie
                    }
                })

            } catch (error) {
                console.log(error);
                res.status(500).json({
                    status: "ERROR",
                    msg: "incorrect_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: error
                })
            }
            break;
        case 'user':
            try {
                const user = await createFunctions.User(req.body);
                res.status(200).json({
                    status: "OK",
                    msg: "correct_creation",
                    token: service.createToken(user),
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: {
                        type: req.params.object,
                        user: user
                    }
                })

            } catch (error) {
                console.log(error);
                res.status(500).json({
                    status: "ERROR",
                    msg: "incorrect_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: error
                })
            }
            break;
        case 'serie':
            try {
                const serie = await createFunctions.Serie(req.body);
                res.status(200).json({
                    status: "OK",
                    msg: "correct_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: {
                        type: req.params.object,
                        serie: serie
                    }
                })

            } catch (error) {
                console.log(error);
                res.status(500).json({
                    status: "ERROR",
                    msg: "incorrect_creation",
                    endpoint: `/api.create/new/${req.params.object}`,
                    method: "POST",
                    data: error
                })
            }
            break;

        default:
            break;
    }
}

module.exports = {
    Create
}