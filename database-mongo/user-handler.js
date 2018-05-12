var User=require('./User.js');
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
	var username = req.body.username;
	User.findOne({username:username}, function (err, found) {
		if(err){
	  return res.status(500).json(err.data);
	}
	if (!found) {
      return res.sendStatus(404);
    }
		res.json(found);
	})
};




exports.userSave = function(req, res) {
  var username=req.body.username;
  var password=req.body.password;
  var Email=req.body.Email;

  var newUser = new User({
    username: username,
    password: password,
    Email:Email
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
	var username = req.body.username;
	User.findOneAndRemove({username:username}, function(err, deleted) {
		if (err) {
			console.log(err);
		}
		res.send(deleted);
	})
};

exports.updateOne = function (req, res) {
  var username=req.body.username;
  var password=req.body.password;
  var Email=req.body.Email;
  var UserObj = {
	    username: username,
	    password: password,
	    email:email

	};
	User.findOneAndUpdate({username:username}, UserObj, function(err, data){
		if (err) {
			console.log (err);
		}
		res.json(data);
	})
};
