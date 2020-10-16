const Protest = require('../models/Protest');
const User = require('../models/User');

const accountSid = 'ACfb8392f8b17bf3def52ce53d4c7672fa';
const authToken = '6b9f99fd48436ef652dd25f32a56ea63';

const client = require('twilio')(accountSid, authToken);

exports.help = (req, res, next) => {
    const protest_id = req.params.protestId;
    const userId = req.userId;
    let name;
    let arr = [];
    User.findById(userId).then(user => {
        name = user.name;
    }).then(result => {
        Protest.findById(protest_id).then(protest => {
            const users = protest.presentUser.map(el => {
                return User.findById(el.user_id);
            });
            Promise.all(users).then(resulto => {
                arr = resulto.map(el => el.number);
            }).then(okay => {
                arr.forEach(element => {
                    console.log(element);
                    client.messages.create({
                        to: `+91${element}`,
                        from: `+12548707460`,
                        body: `I am ${name}. I am in trouble.Could somebody please contact me`
                    }).then(message => console.log("sent"));
                });
                res.status(200).send({ msg: "Sent Successfuly" });
            });
        });
    }).catch(err => {
        res.status(500).send('Internal server error');
    });
};