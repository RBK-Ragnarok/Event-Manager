var session = require('express-session')

exports.isLoggedIn = function (req, res) {
  if (req.session.user) {
    console.log(req.session)
    return true
  }
  return false
}

exports.checkUser = function (req, res, next) {
  if (!exports.isLoggedIn(req)) {
    console.log('user not logged in')
    res.send('<script>window.location.href="/login"</script>')
  } else {
    console.log(req.session)
    console.log('in checkuser function:logged in')
    next()
  }
}

exports.createSession = function (req, res, aUser) {
  req.session.user = aUser
  console.log('in create session function:created session and redirected')
  res.send('201')
}

exports.logout = function (req, res) {
  req.session.destroy()
  res.status(200).send('<script>window.location.href="/"</script>')
}
