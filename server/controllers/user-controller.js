const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const register = (req,res) => {
    const { name,email,password } = req.body
    User.findOne({
        email: email
    })
        .then((data_user) => {
            if (data_user) {
                res.status(200).json({
                    message: `Email is Already Exist`,
                })
            }
            else {
                User.create({
                    name: name,
                    email: email,
                    password: password
                })
                    .then((new_user) => {
                        res.status(201).json({
                            message: `Register Success!`,
                            data: new_user
                        })
                    })
                    .catch((err) => {
                        res.status(400).json({
                            message: `Password must greater than 5!`
                        })
                    });
            }
        })
        .catch((err) => {
            res.status(400).json({
                message: `Internal Server Error`
            })
        });
}

const login = (req,res) => {
    const { email,password } = req.body
    User.findOne({
        email: email
    })
        .then((data_user) => {
            console.log(data_user._id);
            if (data_user) {
                let check_pass = bcrypt.compareSync(password, data_user.password);
                if (check_pass) {
                    let token = jwt.sign( { id: data_user._id, name: data_user.name, email: data_user.email}, process.env.JWT_KEY)
                    res.status(200).json({
                        message: `Login Success!`,
                        token
                    })
                }
                else {
                    res.status(200).json({
                        message: `Password Wrong!`
                    })
                }
            }
            else {
                res.status(200).json({
                    message: `User Not Registered!`
                })
            }
        })
        .catch((err) => {
            res.status(400).json({
                message: `Internal Server Error`
            })
        });
}

module.exports = {
    register,
    login
}