const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tags = Object.freeze({
    PUZZLE: 'puzzle',
    STANDARD: 'standard',
    THEMED: 'themed',
    SHORT_AND_SWEET: 'short',
    FAST: 'fast'
});

let Stage = new Schema({
    stage_description: {
        type: String
    },
    stage_tag: {
        type: String,
        enum: Object.values(tags),
        default: 'standard'
    },
    stage_id: {
        type: String
    },
    stage_completed: {
        type: Boolean
    },
}, {timestamps: true});
module.exports = mongoose.model('Stage', Stage);