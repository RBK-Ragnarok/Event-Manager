var express = require("express")
var bodyParser = require("body-parser")
var Router = require("./routes")
var Users = require("../database-mongo")
var session = require("express-session")
var app = express()

app.use(session({
    secret: "159753d",
    resave: true,
    saveUninitialized: false
}))

app.use("/", Router)
app.use(express.static(__dirname + "/../react-client/dist"))
var port =  process.env.PORT || 3000
if (!module.parent) {
    app.listen(port, function () {
        console.log("listening on port"+port+"!")
    })
}

module.exports = app
