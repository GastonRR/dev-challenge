// DB ALL MODELS
const db = require('../database/models');

const bcrypt = require('bcrypt');
var moment = require('moment');

//Global functions for creation of all entities

const Genre = (body) => {
    const create = new Promise(async (resolve, reject) => {
        try {
            const genre = await db.Genre.create({
                name: body.name,
                active: 1,
            });
            resolve(genre);

        } catch (error) {
            reject({
                status: 500,
                message: "SERVER_ERROR"
            });
        }
    });

    return create
}

const Serie = (body) => {
    const create = new Promise(async (resolve, reject) => {
        try {
            const serie = await db.Serie.create({
                title: body.title,
                releaseDate: moment(body.releaseDate,'DD-MM-YYYY').format('YYYY-MM-DD'),
                idGenre: body.idGenre
            });
            resolve(serie);

        } catch (error) {
            reject({
                status: 500,
                message: "SERVER_ERROR"
            });
        }
    });

    return create
}
const Season = (body) => {
    const create = new Promise(async (resolve, reject) => {
        try {
            const serie = await db.Serie.findOne({
                include: [
                    {
                        association: "Seasons"
                    }
                ],
                where: { id: body.idserie }
            })
            const season = await db.Season.create({
                title: body.title,
                number: serie.Seasons.length + 1,
                releaseDate: moment(body.releaseDate,'DD-MM-YYYY').format('YYYY-MM-DD'),
                idSerie: body.idserie
            });
            resolve(season);

        } catch (error) {
            
            reject({
                status: 500,
                message: "SERVER_ERROR"
            });
            
        }
    });

    return create
}
const Episode = (body) => {
    const create = new Promise(async (resolve, reject) => {
        try {

            const season = await db.Season.findOne({
                include: [
                    {
                        association: "Episodes"
                    }
                ],
                where: { id: body.idSeason }
            })

            const episode = await db.Episode.create({
                title: body.title,
                number: season.Episodes.length + 1,
                releaseDate: moment(body.releaseDate,'DD-MM-YYYY').format('YYYY-MM-DD'),
                idSeason: body.idSeason,
                idDirector: body.idDirector
            });

            resolve(episode);

        } catch (error) {
            console.log(error)
            reject({
                status: 500,
                message: "SERVER_ERROR"
            });
        }
    });

    return create
}
const Actor = (body) => {
    const create = new Promise(async (resolve, reject) => {
        try {
            const actor = await db.Actor.create({
                firstName: body.name,
                lastName: body.lastName,
                awards: body.awards
            });
            resolve(actor);

        } catch (error) {
            reject({
                status: 500,
                message: "SERVER_ERROR"
            });
        }
    });

    return create
}

const Director = (body) => {
    const create = new Promise(async (resolve, reject) => {
        try {
            const director = await db.Director.create({
                firstName: body.name,
                lastName: body.lastName,
                awards: body.awards
            });
            resolve(director);

        } catch (error) {
            reject({
                status: 500,
                message: "SERVER_ERROR"
            });
        }
    });

    return create
}

const Movie = (body) => {
    const create = new Promise(async (resolve, reject) => {
        try {
            const movies = await db.Movie.create({
                title: body.title,
                awards: body.awards,
                length: body.duration,
                releaseDate: moment(body.releaseDate,'DD-MM-YYYY').format('YYYY-MM-DD'),
                idGenre: body.idGenre,
                idDirector: body.idDirector
            });
            resolve(movies);

        } catch (error) {
            console.log(error);
            reject({
                status: 500,
                message: "SERVER_ERROR"
            });
        }
    });

    return create
}

const User = (body) => {
    const create = new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.create({
                name: body.name,
                email: body.email,
                password: bcrypt.hashSync(body.password, 10)
            });
            resolve(user);

        } catch (error) {
            reject({
                status: 500,
                message: "SERVER_ERROR"
            });
        }
    });

    return create
}







module.exports = {
    Genre,
    Serie,
    Season,
    Episode,
    Actor,
    Director,
    Movie,
    User
}