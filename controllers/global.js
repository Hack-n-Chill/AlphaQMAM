const express = require('express');
const User = require('../models/User');
const Protest = require('../models/Protest');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createProtest } = require('./user');
const emailValidator = require('../validation/email');
const passwordValidator = require('../validation/password');



//TODO:Add validation and errors

//POST: creating user with data passed in signup form
exports.registerUser = (req, res, next) => {
    const name = req.body.name;
    const email_id = req.body.email_id;
    const password = req.body.password;
    const number = req.body.number;
    if (!passwordValidator.validator(password)) {
        res.status(400).send({ msg: "Incorrect parameters", password: passwordValidator.errMessage });
        return;
    }
    bcrypt.hash(password, 12).then(hashedPassword => {
        const user = new User({
            name: name,
            password: hashedPassword,
            email_id: email_id,
            number: number
        });
        const validationErrors = user.validateSync();

        if (validationErrors !== undefined) {
            const err = {
                message: "Incorrect parameters!",
            };
            Object.keys(validationErrors.errors).forEach((key) => {
                err[key] = validationErrors.errors[key].message;
            });
            res.status(400).send(err);
            return;
        }
        return user.save();
    }).then(result => {
        res.status(200).send({ msg: "Created" });
    })
        .catch(err => {
            console.log(err);
        });
};
//POST:Logging in with data
exports.login = (req, res, next) => {
    const email_id = req.body.email_id;
    const password = req.body.password;
    let loadedUser;
    User.findOne({ email_id: email_id }).then(
        user => {
            if (!user) {
                return res.status(401).send({ msg: "User with this email does not exist" });
            }
            loadedUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                return res.status(401).send({ msg: "Wrong Password" });
            }
            const token = jwt.sign(
                {
                    userId: loadedUser._id.toString(),
                    username: loadedUser.name
                },
                'somesupersecretsecret',
                { expiresIn: '24h' }
            );
            res.status(200).json({ token: token, userId: loadedUser._id.toString(), username: loadedUser.name });
        }).catch(err => console.log(err));
};
//GET: To get all the protests
exports.getProtests = (req, res, next) => {
    Protest.find()
        .then(protests => {
            res.status(200).send({ protests: protests });
        })
        .catch(err => {
            console.log(err);
        });
};


