var Router=require('express').Router();
var express=require('express')
var util=require('./util.js')
var User=require('../database-mongo/User')
var Event=require('../database-mongo/Event')
var eventFunctions=require('../database-mongo/event-handler.js')
var userFunctions=require('../database-mongo/user-handler.js')
var bodyParser = require('body-parser');
var path=require('path');
var mongooes=require('mongoose');
var bcrypt=require('bcrypt');

Router.use(bodyParser.json())
Router.use(bodyParser.urlencoded({extended : true}))

//Home page route.
Router.route('/')
.get(function(req,res){
  console.log('in routes /');

  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));

})
.post(function(req,res){

})

//login route
Router.route('/login')
.get(function(req,res){
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));

})
.post(function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    console.log(req.body);
    User.findOne({username:username},function(err,user){
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
            res.end()
          }
        })
      }
    })


})

//signup route.
Router.route('/signup')
.get(function(req,res){
  res.sendFile(path.join(__dirname, '../react-client/dist/index.html'));

})
.post(function(req,res){
  // if(req.body.username && req.body.password && req.body.email){
    console.log(req.body);

    var username=req.body.username;
    var password=req.body.password;
    var email=req.body.email;

    User.findOne({username:username},function(err,user){
      console.log(user);
      if(!user){
        //make him an account
        bcrypt.hash(password,10,function(err,hash){
          var user=new User({
            email:email,
            username:username,
            password:hash
          })

          user.save(function(err,user){
            if(err){
              console.log(err);
            } else{
              console.log('saved user in db');
            }

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

  // }else{
  //   console.log('Missing some data!');
  //   res.redirect('/signup')
  // }
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
