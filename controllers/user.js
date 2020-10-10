const express = require('express');
const User = require('../models/User');
const mongoose = require('mongoose');

exports.registerUser = (req, res, next) => {
    const name = req.body.name;
    const email_id = req.body.email_id;
    const password = req.body.password;
    User.create({
        name: name,
        password: password,
        email_id: email_id
    }).then(result => {
        res.status(200).send({ msg: "Created" });
    })
        .catch(err => {
            console.log(err);
        });
};
