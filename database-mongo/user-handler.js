var request = require('request');
var bcrypt = require('bcrypt');
var db=require('../database-mongo');
var User=require('./user.js');
var Event=require('./Event.js');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');


exports.retrieveAll = function (req, res) {
	User.find({}, function(err, data) {
		if(err){
	 return res.status(500).json(err.data);
		}
		if (data.length === 0) {
      return res.sendStatus(404);
    }
		res.json(data);
	});
};


exports.retrieveOne = function (req, res) {
	var userName = req.body.userName;
	User.findOne({userName:userName}, function (err, found) {
		if(err){
	  return res.status(500).json(err.data);
	}
	if (!found) {
      return res.sendStatus(404);
    }
		res.json(found);
	})
};




exports.Usersave = function(req, res) {
  var userName=req.body.userName;
  var passWord=req.body.passWord;
  var Email=req.body.Email;
  var Age=req.body.Age;
  var events=req.body.events;
  var gender=req.body.gender;
  var rating=req.body.rating;
  var newUser = new User({
    userName: userName,
    passWord: passWord,
    Email:Email,
    Age:Age,
    gender:gender,
    rating:rating,
    events:events
  });

  newUser.save(function(err,data) {
   if(err){
     res.status(500).send(err);
   }

   else{
    res.status(201).send("its saved");
    console.log('saved')
  }
})
}

exports.deleteUser= function(req, res) {
  User.remove({},function(err,data){
   if(err){
     res.status(500).send("err");
   }
   else{
    res.status(201).send("deleted");
  }
})
}


exports.deleteOne = function (req, res) {
	var userName = req.body.userName;
	User.findOneAndRemove({userName:userName}, function(err, deleted) {
		if (err) {
			console.log(err);
		}
		res.send(deleted);
	})
};

exports.updateOne = function (req, res) {
  var userName=req.body.userName;
  var passWord=req.body.passWord;
  var Email=req.body.Email;
  var Age=req.body.Age;
  var events=req.body.events;
  var gender=req.body.gender;
  var rating=req.body.rating;
  var UserObj = {
	    userName: userName,
	    passWord: passWord,
	    Email:Email,
	    Age:Age,
	    gender:gender,
	    rating:rating,
	    events:events
	};
	User.findOneAndUpdate({userName:userName}, UserObj, function(err, data){
		if (err) {
			console.log (err);
		}
		res.json(data);
	})
};
