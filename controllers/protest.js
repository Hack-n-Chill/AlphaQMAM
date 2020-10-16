const Protest = require("../models/Protest");
const Protest_Update = require("../models/Protest_Update");
const User = require("../models/User");


//POST:Creating a Protest Update
exports.update = (req, res, next) => {
    const title = req.body.title;
    const description = req.body.description;
    const username = req.username;
    const user_id = req.userId;
    const protest_id = req.params.protestId;
    Protest_Update.create({
        protest_id: protest_id,
        title: title,
        description: description,
        username: username,
        user_id: user_id

    }).then(result => {
        res.status(200).send({ msg: "Update added" });
    }).catch(err => {
        res.status(500).send('Internal server error');
    });
};

//GET:On calling single Protest page sending protest data,updates,whether signed up or not
exports.getProtest = (req, res, next) => {
    const user_id = req.userId;
    const protest_id = req.params.protestId;
    console.log(user_id);
    let status = "Active";
    Protest.findById(protest_id).then(
        protest => {
            console.log(Date.now());
            if (Date.now() < (protest.startTime))
                status = "Opens Soon";
            else if (Date.now() > protest.endTime)
                status = "Closed";
            Protest_Update.find({ protest_id: protest_id }).then(
                protestupdates => {
                    let signedup = (protest.signedupUser.find(o => o.user_id.toString() === user_id));
                    let present = (protest.presentUser.find(o => o.user_id.toString() === user_id));
                    if (signedup)
                        signedup = true;
                    else
                        signedup = false;
                    if (present)
                        present = true;
                    else
                        present = false;
                    res.status(200).json({ protest: protest, protestupdates: protestupdates, signedup: signedup, present: present, status: status });
                });
        }).catch(err => {
            res.status(500).send('Internal server error');
        });
};

//POST:Signup for a particular protest
exports.signupProtest = (req, res, next) => {
    const user_id = req.userId;
    const protest_id = req.params.protestId;
    Protest.findById(protest_id).then(protest => {
        protest.signedupUser.push({ user_id: user_id });
        protest.save().then(result => {
            User.findById(user_id).then(user => {
                user.signedupProtest.push({ protest_id: protest_id });
                user.save().then(resulto => {
                    res.status(200).send({ msg: "Signedup successfully" });
                });
            });
        });
    }).catch(err => {
        res.status(500).send('Internal server error');
    });
};

//POST:Mark themseleves present in the protest
exports.presentProtest = (req, res, next) => {
    const user_id = req.userId;
    const protest_id = req.params.protestId;
    Protest.findById(protest_id).then(protest => {
        protest.presentUser.push({ user_id: user_id });
        protest.save().then(result => {
            res.status(200).send({ msg: "Thank You For Being There" });
        });
    }).catch(err => {
        res.status(500).send('Internal server error');
    });
};

