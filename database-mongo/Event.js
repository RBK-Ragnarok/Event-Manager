var mongoose = require('mongoose')
var CommentSchema=require('./Comment').CommentSchema

var EventSchema = mongoose.Schema({
  creator: {type: String, required: false, unique: false},
  eventName: {type: String, required: false, unique: true,dropDups: true},
  duration: {type: Number, required: false},
  startDate: {type: String, required: false},
  place: {type: String, required: false},
  eventType: {type: String, required: false},
  cost: {type: Number, required: false},
  description: {type: String, required: false},
  comments:[CommentSchema]
}, {
  usePushEach: true
})

var Event = mongoose.model('Event', EventSchema)

module.exports = Event
module.exports.EventSchema = EventSchema
