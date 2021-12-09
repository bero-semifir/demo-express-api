const mongoose = require('mongoose');

const roomSchema = {
    name: { type: String, required: true }
}

const RoomModel = mongoose.model('rooms', roomSchema)

module.exports = RoomModel;
