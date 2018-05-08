var router=require('express').Router();
// var controller=require('')
var util=require('./util.js')
var User=require('../database-mongo/User.js')
var Event=require('../database-mongo/Event')

//Home page route.
router.route('/')
.get(util.checkUser,function(req,res){
  res.send('logged in!')
})
.post(function(req,res){

})

//login route
router.route('/login')
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
          }else{
            console.log('Wrong username or password!');
          }
        })
      }
    })

  }
})

//signup route.
router.route('/signup')
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


//Users router to get and modify users info.
router.route('/users')
.get(util.checkUser,function(req,res){
})
.post()

//events route to get and modify events info.
router.route('/events')
.get(util.checkUser,function(req,res){
})
.post()

module.exports=router
