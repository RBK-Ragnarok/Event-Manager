var router=require('express').Router();

//Home page route.
router.route('/')
.get(function(req,res){

})
.post(function(req,res){

})

//login route
router.route('/login')
.get()
.post(function(req,res){
  if(req.body.username && req.body.password && req.body.email){}
})

//signup route.
router.route('/signup')
.get()
.post(function(req,res){
  if(req.body.username && req.body.password && req.body.email){

    User.findOne({username:username},function(err,user){
      if(!user){

        //make him an account
      }else{
        res.send('User already exists!')
      }
    })

  }
})


//Users router to get and modify users info.
router.route('/users')
.get(function(req,res){
})
.post()

//events route to get and modify events info.
router.route
.get('/events',function(req,res){
})
.post()
