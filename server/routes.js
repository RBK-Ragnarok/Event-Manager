var Router=require('express').Router();
// var controller=require('')
var util=require('./util.js')
var User=require('../database-mongo/User')
var Event=require('../database-mongo/Event')
var eventFunctions=require('../database-mongo/event-handler.js')
var userFunctions=require('../database-mongo/user-handler.js')

//Home page route.
Router.route('/')
.get(util.checkUser,function(req,res){
  res.send('logged in!')
})
.post(function(req,res){

})

//login route
Router.route('/login')
.get()
.post(function(req,res){
  if(req.body.username && req.body.password){
    var username=req.body.username;
    var password=req.body.password;

    User.find({username:username},function(err,user){
      if(!user){
        console.log('User does not exist!');
      }else{
        bcrypt.compare(password,user.password,function(err,match){
          if(err){
            console.log(err);
          }

          if(match){
            //create session and redirect
            util.createSession(req,res,user)
          }else{
            console.log('Wrong username or password!');
          }
        })
      }
    })

  }
})

//signup route.
Router.route('/signup')
.get()
.post(function(req,res){
  if(req.body.username && req.body.password && req.body.email){

    var username=req.body.username;
    var password=req.body.password;
    var email=req.body.email;

    User.find({username:username},function(err,user){
      if(!user){
        //make him an account
        bcrypt.hash(password,10,function(err,hash){
          var user=new User({
            email:email,
            username:username,
            password:hash
          })
        })
        //create session
        util.createSession(req,res,user)
        console.log('Created new User!')
      }else{
        console.log('User already exists!');
        res.send('User already exists!')
      }
    })

  }else{
    console.log('Missing some data!');
  }
})

Router.route('/user')
.get(function(req,res){userFunctions.retrieveOne(req,res)})
.post(function(req,res){userFunctions.userSave(req,res)})
.put(function(req,res){userFunctions.updateOne(req,res)})
.delete(function(req,res){userFunctions.deleteOne(req,res)})

//Users Router to get and modify users info.
Router.route('/users')
.get(function(req,res){userFunctions.retrieveAll(req,res)})
.post(function(req,res) {
  res.sendStatus(404)
})




module.exports=Router
