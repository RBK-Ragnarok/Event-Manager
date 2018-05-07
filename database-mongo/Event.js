var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});


var EventSchema = mongoose.Schema({
  name: {type:String,required : true,unique: true},
  duration: {type:Number,required : true},
  startDate: {type:Number,required : true},
  place: {type:String,required : true},
  eventType: {type:String,required : true},
  userId: {type:String,required : true},
  cost: {type:Number,required : true},
  description: {type:String,required : true}
});

var event = mongoose.model('event', EventSchema);


module.exports=event;