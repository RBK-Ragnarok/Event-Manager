var Event = require('./Event')
var User = require('./User')
var mongoose = require('mongoose')

exports.eventCreate = function (req, res) {
  // console.log(req.body,req.session.user);
  var creator = req.session.user.username
  var eventName = req.body.eventName
  var duration = req.body.duration
  var startDate = req.body.startDate
  var place = req.body.place
  var eventType = req.body.eventType
  var cost = req.body.cost
  var description = req.body.description

  var newEvent = new Event({
    creator: creator,
    eventName: eventName,
    duration: duration,
    startDate: startDate,
    place: place,
    eventType: eventType,
    cost: cost,
    description: description
  })
  console.log(newEvent)

  newEvent.save(function (err, event) {
    if (err) {
      console.log(err)
    } else {
      console.log(event)
    }
  })
}

exports.retrieveAll = function (req, res) {
  Event.find({}, function (err, events) {
    if (err) {
      console.log(err)
    }
    if (events.length === 0) {
      return res.sendStatus(404)
    }
    res.json(events)
  })
}

exports.getEventById = function (req, res) {
  console.log(req.params.id)
  var id = req.params.id
  Event.findById(id, function (err, event) {
    if (err) {
      console.log('in findbyid function couldnt find the event', err)
    }
    res.json(event)
  })
}

exports.findEventByType = function (req, res) {
  var eventType = req.body.eventType
  Event.find({eventType: eventType}, function (err, events) {
    if (err) {
	  return res.status(500).json(err.data)
    }
    if (!events) {
      return res.sendStatus(404)
    }
    res.json(events)
  })
}

//
// exports.deleteEvent = function (req, res) {
//   Event.remove({}, function (err, data) {
//     if (err) {
//       res.status(500).send('err')
//     } else {
//       res.status(201).send('deleted')
//     }
//   })
// }

exports.deleteOne = function (req, res) {
  var name = req.params.eventName
  Event.findOneAndRemove({eventName: eventName}, function (err, deleted) {
    if (err) {
      console.log(err)
    }
    res.send(deleted)
  })
}

exports.updateOne = function (req, res) {
  var creator = req.body.creator
  var eventName = req.body.name
  var duration = req.body.duration
  var startDate = req.body.startDate
  var place = req.body.place
  var eventType = req.body.eventType
  var cost = req.body.cost
  var description = req.body.description

  var eventObj = {
    eventName: eventName,
    duration: duration,
	    startDate: startDate,
	    place: place,
	    eventType: eventType,
	    cost: cost,
	    description: description
  }
  Event.findOneAndUpdate({eventName: eventName}, eventObj, function (err, data) {
    if (err) {
      console.log(err)
    }
    res.json(data)
  })
}
