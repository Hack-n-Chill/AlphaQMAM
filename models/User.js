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
    createdProtest: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ],
    signedupProtest: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
});
module.exports = mongoose.model('User', UserSchema);