const express = require('express');
const Protest = require('../models/Protest');
const User = require('../models/User');


//TODO:Add Validation and Errors

//POST: Create a protest by a specific user
exports.createProtest = (req, res, next) => {
    const userId = req.body.userId;
    const organisation = req.body.organisation;
    const title = req.body.title;
    const description = req.body.description;
    const date = req.body.date;
    const location = req.body.location;
    Protest.create({
        organisation: organisation,
        title: title,
        description: description,
        location: location,
        date: date,
        createdBy: userId
    }).then(result => {
        User.findById(userId).then(user => {
            user.createdProtest.push({ protest_id: result._id });
            user.save().then(updateUser => {
                res.status(200).send({ msg: "Protest created successfully" });
            });
        });
    }).catch(err => {
        console.log(err);
    });
};


//GET:Find the protests created by a specific user
exports.myProtests = (req, res, next) => {
    const userId = req.params.userId;
    User.findById(userId).then(user => {
        if (!user)
            res.status(401).send({ msg: "User does not exist" });
        const allProtests = user.createdProtest.map(elem => {
            return Protest.findById(elem.protest_id);
        });
        Promise.all(allProtests).then(result => {
            res.status(200).send({ Protests: result });
        });
    }).catch(err => {
        console.log(err);
    });
};

