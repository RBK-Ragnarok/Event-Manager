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
  var username = req.sessoin.user.username
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
// exports.updateEvent = function(req,res) {
//  console.log('hhhhhhhh',req.session.user.username)
//   User.findOne({username:req.session.user.username}, function (err, user) {
//     if (err){ 
//       return handleError(err);
//     }
//    console.log('hiiiiiiiiii',req.session.user.events)
//     var eventsArr=user.events
//     eventsArr.push(req.params._id)

//     User.update({username:req.session.user.username},{events:eventsArr},function(err,user){
//       if(err){
//         console.log(err)
//       }else{
//         console.log("lolo",user)
//       }
//     })

//   });
// }
exports.update = function (req, res) {
  var query = { id: req.params.id };
  console.log("hhhhhhhh",)
  var updatedProps = req.body;
  var options = { new: true };
  User.findOneAndUpdate(query, updatedProps, options, function (err, response) {
    if (err) {
      return res.json(err.message);
    }
    if (!response) {
      return res.sendStatus(404);
    }
    res.json(response);
  });
};

exports.addEvent=function(req,res){
  var username=req.session.user.username
  var event=req.body
}
