var Event = require('./Event')
var mongoose = require('mongoose')

exports.eventCreate = function (req, res) {
  // var creator=req.body.user
  // var eventName = req.body.eventName
  // var duration = req.body.duration
  // var startDate = req.body.startDate
  // var place = req.body.place
  // var eventType = req.body.eventType
  // var cost = req.body.cost
  // var description = req.body.description
  //

  // var newEvent = new Event({
  //   name: name,
  //   startDate: startDate,
  //   place: place,
  //   eventType: eventType,
  //   userId: userId,
  //   cost: cost,
  //   description: description
  // })

  Event.create(req.body,function (err, event) {
    if (err) {
      res.status(500).send(err)
    } else {
      console.log('saved event')
      res.send(event)
    }
  })
}

exports.retrieveAll = function (req, res) {
  Event.find({}, function (err, events) {
    if (err) {
      console.log(err);
    }
    if (events.length === 0) {
      return res.sendStatus(404)
    }
    res.json(events)
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
  var name = req.params.name
  Event.findOneAndRemove({name: name}, function (err, deleted) {
    if (err) {
      console.log(err)
    }
    res.send(deleted)
  })
}

exports.updateOne = function (req, res) {
  var name = req.body.name
  var duration = req.body.duration
  var startDate = req.body.startDate
  var place = req.body.place
  var eventType = req.body.eventType
  var userId = req.body.userId
  var cost = req.body.cost
  var description = req.body.description

  var eventObj = {
    name: name,
	    startDate: startDate,
	    place: place,
	    eventType: eventType,
	    userId: userId,
	    cost: cost,
	    description: description
  }
  Event.findOneAndUpdate({name: name}, eventObj, function (err, data) {
    if (err) {
      console.log(err)
    }
    res.json(data)
  })
}
