const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email_id: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    createdProtest: [
        {
            protest_id: {
                type: Schema.Types.ObjectId,
                ref: 'Protest'
            }
        }
    ],
    signedupProtest: [
        {
            protest_id: {
                type: Schema.Types.ObjectId,
                ref: 'Protest'
            }
        }
    ]
});
module.exports = mongoose.model('User', UserSchema);