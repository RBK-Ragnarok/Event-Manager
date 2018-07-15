var mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/test")
// mongoose.connect('mongodb://belalfaouri:abc123@ds241570.mlab.com:41570/eventful')



var db = mongoose.connection

db.on("error", function () {
    console.log("mongoose connection error")
})

db.once("open", function () {
    console.log("mongoose connected successfully")
})

var itemSchema = mongoose.Schema({
    quantity: Number,
    description: String
})

var Item = mongoose.model("Item", itemSchema)

var selectAll = function (callback) {
    Item.find({}, function (err, items) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, items)
        }
    })
}

var deleteAll = function (callback) {
    Item.find({}, function (err, items) {
        if (err) {
            callback(err, null)
        } else {
            callback(null, items)
        }
    })
}

var save = (data) => {
    var item = new Item({item: data})

    item.save(function (err, data) {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
}

module.exports.selectAll = selectAll
module.exports.deleteAll = deleteAll
module.exports.save = save
