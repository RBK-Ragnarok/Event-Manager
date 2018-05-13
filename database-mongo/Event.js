var mongoose = require('mongoose')

var EventSchema = mongoose.Schema({
  creator:{type: String, required: true, unique: true},
  attending:{type: Array, required: false, unique: false},
  eventName: {type: String, required: true, unique: true},
  duration: {type: Number, required: true},
  startDate: {type: String, required: true},
  place: {type: String, required: true},
  eventType: {type: String, required: true},
  cost: {type: Number, required: true},
  description: {type: String, required: true}
})

var Event = mongoose.model('Event', EventSchema)

module.exports=Event;
module.exports.EventSchema = EventSchema
