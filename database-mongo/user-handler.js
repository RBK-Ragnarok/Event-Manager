var User = require('./User.js')
var mongoose = require('mongoose')

exports.retrieveOne = function (req, res) {
  console.log(req.session.user);
  var username = req.session.user.username
  var id=req.session.user._id
  User.findById({_id:id}, function (err, found) {
    console.log(found);
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

    User.create(req.body,function (err, user) {
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
  var username = req.session.user.username
  var password = req.body.password
  var email = req.body.email
  var age=req.body.age
  var about =req.body.about
  var rating=req.body.rating

  var UserObj = {
	    username: username,
	    password: password,
	    email: email,
      age:age,
      gender:gender,
      about:about,
      rating:rating,

  }

  User.findOneAndUpdate({username: username}, UserObj, function (err, data) {
    if (err) {
      console.log(err)
    }
    res.json(data)
  })
}
exports.updateUser = function (req, res) {
  console.log("hiiiii",req.params._id)
    var updateuser={    
        events: req.params._id
     }
    console.log('lolololo',req.session.user.username)
    User.findOneAndUpdate({username:req.session.user.username},updateuser,function(err,data){
        if(err){
            res.json('err');
        }
        else{
             data.save(function(err,data){
                 if(err){
                    return handleError(err)
                 }
                 else{
                 res.json(data);
             }
          })
        } 
    })
}

exports.addEvent=function(req,res){
  var username=req.session.user.username
  var event=req.body
}
