// DB MODEL USER
const { User } = require('../database/models')

const bcrypt = require('bcrypt');

const service = require('../services'); // jwt

// User functions for routes 

const SignIn = async (req, res, next) => {
    try {
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)

        });

        res.status(200).json({
            status: "OK",
            msg: "correct_creation",
            token: service.createToken(user),
            endpoint: '/api.users/SignIn',
            method: "POST",
            data: {
                type: "User",
                id: user.id
            }
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "ERROR",
            msg: "incorrect_creation",
            endpoint: '/api.users/SignIn',
            method: "POST",
            data: error
        })
    }

}

const LogIn = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        const match = bcrypt.compareSync(req.body.password, user.password);
        if(!match){
            return res.status(403).json({
                status: "ERROR",
                msg: "INCORRECT_PASSWORD",
                endpoint: '/api.users/LogIn',
                method: "POST",
            });
        }
        req.user = User;
        res.status(200).json({
            status: "OK",
            msg: "USER_LOGIN",
            token: service.createToken(user),
            endpoint: '/api.users/LogIn',
            method: "POST",
            data: {
                type: "User",
                name: user.name
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            msg: "server_error",
            endpoint: '/api.users/LogIn',
            method: "POST",
            data: error
        })
    }

}

const getUser = async (req, res, next) => {
    try {
        const user = await User.findOne({
            where: {
                id: req.params.id
            }
        });
        if(user == null){
            return res.status(404).json({
                status: "ERROR",
                msg: "USER_NOT_FOUND",
                endpoint: `/api.users/detail/${req.params.id}`,
                method: "GET",
                data: {
                    type: "User",
                    user: user
                }
            })
        }
        res.status(200).json({
            status: "OK",
            msg: "USER_FOUND",
            endpoint: `/api.users/detail/${req.params.id}`,
            method: "GET",
            data: {
                type: "User",
                user: user
            }
        })
    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            msg: "SERVER_ERROR",
            endpoint: `/api.users/detail/${req.params.id}`,
            method: "GET",
            data: error
        })
    }

}

module.exports = {
    SignIn,
    LogIn,
    getUser
}




