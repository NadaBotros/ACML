const mongoose = require('mongoose')
const Schema = mongoose.Schema

const spotsSchema = new Schema({
  occupied: {
    type: Boolean,
    default: false,
    required: false
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  }
})

module.exports = Spot = mongoose.model('spots', spotsSchema)
