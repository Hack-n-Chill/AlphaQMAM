const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProtestUpdateSchema = new Schema({
    protest_id: {
        type: Schema.Types.ObjectId,
        ref: 'Protest',
        required: true
    },
    updates: [
        {
            title: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            user_id: {
                type: Schema.Types.ObjectId,
                required: true
            }
        }
    ]
});

module.exports = mongoose.model('ProtestUpdate', ProtestUpdateSchema);