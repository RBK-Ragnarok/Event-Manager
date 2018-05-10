exports.isLoggedIn=function(req,res){
  if(req.session.user){
    return true;
  }
  return false;
}


exports.checkUser=function(req,res,next){
  if(!exports.isLoggedIn(req)){
    console.log('user not logged in');
    res.redirect('/login')
  }
  console.log(req.session);
  console.log('in checkuser function:logged in');
  next()
}

exports.createSession=function(req,res,aUser){
  req.session.user=aUser;
  console.log('in create session function:created session and redirected');
  res.redirect('/')
}
