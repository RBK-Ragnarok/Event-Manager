var Message = require('./Message.js')
var mongoose = require('mongoose')

exports.saveMessage = function (req, res) {

  var to = req.body.to
  var from = req.session.user.username
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
      res.sendStatus(200)
    }
  })
}

exports.getAllMessages = function (req, res) {
  var to=req.session.user.username;

  Message.find({to:to}, function (err, messages) {
    if (err) {
      console.log(err)
    }
    if (messages.length === 0) {
      return res.sendStatus(404)
    }
    res.json(messages)
  })
}
