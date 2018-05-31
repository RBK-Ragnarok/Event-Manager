var User = require('./User.js')
var mongoose = require('mongoose')

exports.retrieveOne = function (req, res) {
  console.log(req.session.user)
  var username = req.session.user.username
  var id = req.session.user._id
  User.findById({_id: id}, function (err, found) {
    console.log(found)
    if (err) {
	  return res.status(500).json(err.data)
    }
    if (!found) {
      return res.sendStatus(404)
    }
    res.send(found)
  })
}

exports.retrieveAll = function (req, res) {
  User.find({}, function (err, data) {
    if (err) {
	 return res.status(500).json(err.data)
    }
    if (data.length === 0) {
      return res.sendStatus(404)
    }
    res.json(data)
  })
}

exports.userSave = function (req, res) {
  // var username = req.body.username
  // var password = req.body.password
  // var email = req.body.email
  //
  // var newUser = new User({
  //   username: username,
  //   password: password,
  //   email: email
  // })
  //
  // newUser.save(function (err, data) {
  //   if (err) {
  //     res.status(500).send(err)
  //   } else {
  //     res.status(201).send('its saved')
  //     console.log('saved')
  //   }
  // })

  User.create(req.body, function (err, user) {
    if (err) {
      res.status(500).send(err)
    } else {
      console.log('saved user')
      res.send(user)
    }
  })
}

exports.deleteOne = function (req, res) {
  var username = req.session.user.username
  User.findOneAndRemove({username: username}, function (err, deleted) {
    if (err) {
      console.log(err)
    }
    res.send(deleted)
  })
}

exports.updateOne = function (req, res) {
  console.log(req.body);
  var username = req.session.user.username
  var email = req.body.email
  var age = req.body.age
  var imgsrc = req.body.imgsrc

  var UserObj = {
	    username: username,
	    email: email,
    age: age,
    imgsrc: imgsrc
  }

  User.findOneAndUpdate({username: username}, UserObj, function (err, data) {
    if (err) {
      console.log(err)
    }
    res.json(data)
  })
}


exports.updateImg = function (req, res) {
  // console.log(req.body.image);
  var username = req.session.user.username
  var imgsrc=req.body.image

  User.update({
  username: username
}, {
  $set: {
    "imgsrc": imgsrc
  }
}, function (err, user) {
    if (err) throw error
    console.log(user)
    console.log("update user complete")
})


}
exports.updateUser = function (req, res) {
  var username = req.session.user.username

  var newEvent = {
    eventName: req.body.eventName,
    duration: req.body.duration,
    startDate: req.body.startDate,
    place: req.body.place,
    eventType: req.body.eventType,
    cost: req.body.cost,
    description: req.body.description,
    imgsrc: req.body.imgsrc
  }
  User.findOne({username: username}, function (err, foundUser) {
    foundUser.events.push(newEvent)

    foundUser.save(function (err, savedUser) {
      if (err) {
        console.log(err)
      }
    })
  })
}
