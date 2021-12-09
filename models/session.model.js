const mongoose = require('mongoose');

const sessionSchema = {
    name: { type: String, required: true }
}

const SessionModel = mongoose.model('sessions', sessionSchema)

module.exports = SessionModel;
