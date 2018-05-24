var mongoose = require('mongoose')

var CommentSchema = mongoose.Schema({
  sender: String,
  text: String,
  date: String
})

var Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
module.exports.CommentSchema = CommentSchema
