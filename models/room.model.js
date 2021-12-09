const mongoose = require('mongoose');

const roomSchema = {
    name: { type: String, required: true }
}

const RoomModel = mongoose.model('Room', roomSchema)

module.exports = RoomModel;
