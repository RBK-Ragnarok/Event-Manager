exports.isLoggedIn=function(req,res){
  if(req.session.user){
    return true;
  }
  return false;
}

exports.createSession=function(req,res,aUser){
  req.session.user=aUser;
  res.redirect('/')
}

exports.checkUser=function(req,res,next){
  if(!exports.isLoggedIn(req)){
    console.log('user not logged in');
    res.send('not logged in')
  }
  next()
}
