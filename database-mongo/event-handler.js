var request = require('request');
var bcrypt = require('bcrypt');
var db=require('../database-mongo');
var User=require('./User.js');
var Event=require('./Event.js');
var mongoose=require('mongoose');
var bodyParser = require('body-parser');

exports.retrieveAll = function (req, res) {
	Event.find({},function(err, data) {
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
	var name = req.body.name;
	Event.findOne({name:name}, function (err, found) {
		if(err){
	  return res.status(500).json(err.data);
	}
	if (!found) {
      return res.sendStatus(404);
    }
		res.json(found);
	})
};




exports.Eventsave = function(req, res) {
  var name=req.body.name;
  var duration=req.body.duration;
  var startDate=req.body.startDate;
  var place=req.body.place;
  var eventType=req.body.eventType;
  var userId=req.body.userId;
  var cost=req.body.cost;
  var description=req.body.description;
  var newEvent = new Event({
    name: name,
    startDate: startDate,
    place:place,
    eventType:eventType,
    userId:userId,
    cost:cost,
    description:description
  });

  newEvent.save(function(err,data) {
   if(err){
     res.status(500).send(err);
   }

   else{
    res.status(201).send("its saved");
    console.log('saved')
  }
})
}

exports.deleteEvent= function(req, res) {
  Event.remove({},function(err,data){
   if(err){
     res.status(500).send("err");
   }
   else{
    res.status(201).send("deleted");
  }
})
}


exports.deleteOne = function (req, res) {
	var name = req.params.name;
	Event.findOneAndRemove({name:name}, function(err, deleted) {
		if (err) {
			console.log(err);
		}
		res.send(deleted);
	})
};

exports.updateOne = function (req, res) {
	var name=req.body.name;
    var duration=req.body.duration;
    var startDate=req.body.startDate;
    var place=req.body.place;
    var eventType=req.body.eventType;
    var userId=req.body.userId;
    var cost=req.body.cost;
    var description=req.body.description;
	var eventObj = {
		name: name,
	    startDate: startDate,
	    place:place,
	    eventType:eventType,
	    userId:userId,
	    cost:cost,
	    description:description
	};
	Event.findOneAndUpdate({name:name}, eventObj, function(err, data){
		if (err) {
			console.log (err);
		}
		res.json(data);
	})
};
