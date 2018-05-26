var mongoose = require('mongoose')

var MessageSchema = mongoose.Schema({
  username: String,
  email: String,
  message: String
})

var Message = mongoose.model('Message', MessageSchema)

module.exports = Message
module.exports.MessageSchema = MessageSchema
