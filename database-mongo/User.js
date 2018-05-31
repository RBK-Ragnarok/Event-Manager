var mongoose = require('mongoose')
var Event = require('./Event.js')
var eventSchema = require('./Event.js').EventSchema

var UserSchema = mongoose.Schema({
  username: { type: String, required: false, unique: true},
  password: { type: String, required: false },
  email: { type: String, required: false, unique: true},
  age: String,
  gender: String,
  about: String,
  rating: Number,
  imgsrc: String,
  events: [eventSchema]
}, {
  usePushEach: true
})

var User = mongoose.model('User', UserSchema)

module.exports = User
