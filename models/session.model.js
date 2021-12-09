const mongoose = require('mongoose');

const sessionSchema = {
    date: { type: Date, required: true },
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room', required: true }
}

const SessionModel = mongoose.model('Session', sessionSchema)

module.exports = SessionModel;
