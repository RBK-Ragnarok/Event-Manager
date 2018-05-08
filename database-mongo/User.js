var mongoose=require('mongoose');

var UserSchema = mongoose.Schema({
  userName: { type : String, required : true ,unique: true},
  passWord: { type : String, required : true },
  Email: { type : String, required : true },
  Age: {type :Number,required :true},
  gender:{type:String,required:true},
  rating :{type:Number,required:true},
});

var User = mongoose.model('User', UserSchema);


module.exports=User;
