var mongoose = require('mongoose')

var EventSchema = mongoose.Schema({
  creator:{type: String, required: false, unique: false},
  eventName: {type: String, required: false, unique: true},
  duration: {type: Number, required: false},
  startDate: {type: String, required: false},
  place: {type: String, required: false},
  eventType: {type: String, required: false},
  cost: {type: Number, required: false},
  description: {type: String, required: false}
})

var Event = mongoose.model('Event', EventSchema)

module.exports=Event;
module.exports.EventSchema = EventSchema
