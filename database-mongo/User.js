var mongoose=require('mongoose');
var eventSchema=require('./Event')

var UserSchema = mongoose.Schema({
  userName: { type : String, required : true ,unique: true},
  passWord: { type : String, required : true },
  Email: { type : String, required : true },
  ownedEvents:[eventSchema.EventSchema],
  attendingEvents:[eventSchema.EventSchema],
  Age: {type :Number,required :false},
  gender:{type:String,required:false},
  rating :{type:Number,required:false},
});

var User = mongoose.model('User', UserSchema);


module.exports=User;
