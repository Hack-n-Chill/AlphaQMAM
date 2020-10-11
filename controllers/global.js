const express = require('express');
const User = require('../models/User');
const Protest = require('../models/Protest');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


//TODO:Add validation and errors
//TODO:Add aUTHENTICATION MIDDLEWARE

//POST: creating user with data passed in signup form
exports.registerUser = (req, res, next) => {
    const name = req.body.name;
    const email_id = req.body.email_id;
    const password = req.body.password;
    const number = req.body.number;
    bcrypt.hash(password, 12).then(hashedPassword => {
        return User.create({
            name: name,
            password: hashedPassword,
            email_id: email_id,
            number: number
        });
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
    User.findOne({ email_id: email_id }).then(
        user => {
            if (!user) {
                return res.status(401).send({ msg: "User with this email does not exist" });
            }
            console.log(user);
            return bcrypt.compare(password, user.password);
        })
        .then(isEqual => {
            if (!isEqual) {
                return res.status(401).send({ msg: "Wrong Password" });
            }
            res.status(200).send({ msg: "Logged In" });
        })
        .catch(err => {
            console.log(err);
        });
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

//GET:To get a particular protest
exports.getProtest = (req, res, next) => {
    Protest.findById(req.params.protestId).then(
        protest => {
            if (!protest)
                res.status(401).send({ msg: 'Protest not yet registered' });
            res.status(200).send({ protest: protest });
        });
};

