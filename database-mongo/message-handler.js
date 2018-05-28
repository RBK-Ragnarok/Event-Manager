var Message = require('./Message.js')
var mongoose = require('mongoose')

exports.saveMessage = function (req, res) {
  var to = req.session.user.username
  var from = req.body.from
  var text = req.body.text

  var newMessage = new Message({
    to: to,
    from: from,
    text: text,
    date: new Date().toString()
  })
  console.log(newMessage)

  newMessage.save(function (err, event) {
    if (err) {
      console.log(err)
    } else {
      console.log(event)
    }
  })
}

exports.getAllMessages = function (req, res) {
  var to = req.body.to

  Event.find({to: to}, function (err, messages) {
    if (err) {
      console.log(err)
    }
    if (messages.length === 0) {
      return res.sendStatus(404)
    }
    res.json(messages)
  })
}
