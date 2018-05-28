var mongoose = require('mongoose')

var MessageSchema = mongoose.Schema({
  to: String,
  from:String,
  text: String,
  date:String
})

var Message = mongoose.model('Message', MessageSchema)

module.exports = Message
module.exports.MessageSchema = MessageSchema
