var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var event=require('./database-mongo/Event.js');


var UserSchema = mongoose.Schema({
  userName: { type : String, required : true ,unique: true},
  passWord: { type : String, required : true },
  Email: { type : String, required : true },
  Age: {type :Number,required :true},
  gender:{type:String,required:true},
  rating :{type:Number,required:true},
  events: {EventSchema}
});

var user = mongoose.model('user', UserSchema);


module.exports=user;