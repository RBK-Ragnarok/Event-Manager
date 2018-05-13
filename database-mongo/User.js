var mongoose = require('mongoose')
var eventSchema = require('./Event')

var UserSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  email: { type: String, required: true , unique: true},
  age:Number,
  gender:String,
  about:String,
  rating:Number,
  events:{ type: Array, required: false }
})

var User = mongoose.model('User', UserSchema)

module.exports = User
