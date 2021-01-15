const { Serie } = require('../database/models');

// operators Sequelize
const Op = require('Sequelize').Op; 

const getAllSeries = async (req, res, next) => {
    try {
        const series = await Serie.findAll();
        res.status(200).json({
            status: "OK",
            msg: "SERIES_FOUND",
            endpoint: '/api.series/',
            method: "GET",
            data: {
                type: "Serie",
                data: series
            }
        })
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

const getSerieDetail = async (req, res, next) => {
    try {
        const series = await Serie.findOne({
            include: [
                {
                    association: "Seasons"
                }
            ],
           where:{id: req.params.id}
        });
        res.status(200).json({
            status: "OK",
            msg: "SERIES_FOUND",
            endpoint: `/api.series/${req.params.id}/`,
            method: "GET",
            data: {
                type: "Serie",
                data: series
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "ERROR",
            msg: "ERROR_SERVER",
            endpoint: `/api.series/${req.params.id}/`,
            method: "GET",
            data: error
        })
    }
}
const getEpisodeDetail = async (req, res, next) => {
    try {
        const series = await Serie.findOne({
            include: [
                {
                    association: "Seasons",
                    include: [{ 
                        association: "Episodes" , 
                        where:{number: req.params.episode},
                        include: [{association: "Director"}]

                    }],
                    where:{number: req.params.season}
                }
            ],
           where:{id: req.params.id}
        });
        res.status(200).json({
            status: "OK",
            msg: "EPISODE_FOUND",
            endpoint: `/api.series/${req.params.id}/${req.params.season}/${req.params.episode}`,
            method: "GET",
            data: {
                type: "Episode",
                data: series.Seasons[0].Episodes
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "ERROR",
            msg: "ERROR_SERVER",
            endpoint: `/api.series/${req.params.id}/${req.params.season}/${req.params.episode}`,
            method: "GET",
            data: error
        })
    }
}
const getSeasonDetail = async (req, res, next) => {
    try {
        const series = await Serie.findOne({
            include: [
                {
                    association: "Seasons",
                    where:{number: req.params.season},
                    include:[{association: "Serie"}]
                }
            ],
           where:{id: req.params.id}
        });
        res.status(200).json({
            status: "OK",
            msg: "SEASON_FOUND",
            endpoint: `/api.series/${req.params.id}/${req.params.season}`,
            method: "GET",
            data: {
                type: "Season",
                data: series.Seasons
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "ERROR",
            msg: "ERROR_SERVER",
            endpoint: `/api.series/${req.params.id}/${req.params.season}`,
            method: "GET",
            data: error
        })
    }
}
const Search = async (req, res, next) =>{

    try {
        const series = await Serie.findAll({
            include: [
                {
                    association: "Seasons"
                }
            ],
           where:{ title:{[Op.like]:`%${req.query.title}%`}}
        });

        if(series.length == 0){
            
           return res.status(404).json({
                status: "ERROR",
                msg: "SERIE_NOT_FOUND",
                endpoint: `/api.series/search?title=${req.query.title}`,
                method: "GET",
                data: {
                    type: "Series",
                    data: series
                }
            });
        }
        res.status(200).json({
            status: "OK",
            msg: "SERIE_FOUND",
            endpoint: `/api.series/search?title=${req.query.title}`,
            method: "GET",
            data: {
                type: "Series",
                data: series
            }
        });

    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            msg: "ERROR_SERVER",
            endpoint: `/api.series/search?title=${req.query.title}`,
            method: "GET",
            data: error
        })
    }
}



module.exports = {
    getAllSeries,
    getSerieDetail,
    getEpisodeDetail,
    getSeasonDetail,
    Search
}