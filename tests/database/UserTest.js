var mongoose = require("mongoose")
var expect = require("chai").expect
var should = require("should")
var User = require("../../database-mongo/User")
var userFunctions = require("../../database-mongo/user-handler")

describe("Database Tests", function () {
    before(function (done) {
        mongoose.connect("mongodb://localhost/testDatabase")
        const db = mongoose.connection
        db.on("error", console.error.bind(console, "connection error"))
        db.once("open", function () {
            console.log("We are connected to test database!")
            done()
        })
    })

    describe("Users: models", function () {
        describe("create Model", function () {
            it("should create a new User", function (done) {
                User.create({username: "b1", password: "b1"}, function (err, createdUser) {

                })
                var u = {
                    username: "RBK",
                    password: "RBK"
                }
                User.create(u, function (err, createdUser) {
                    should.not.exist(err)
                    createdUser.username.should.equal("RBK")
                    createdUser.password.should.equal("RBK")
                    done()
                })
            })

            it("should find a User by username", function (done) {
                User.findOne({username: "RBK"}, function (err, foundUser) {
                    should.not.exist(err)
                    foundUser.password.should.equal("RBK")
                    done()
                })
            })

            it("should get all users in database", function (done) {
                User.find({}, function (err, users) {
                    should.not.exist(err)
                    users.length.should.equal(2)
                    done()
                })
            })

            it("should remove a user from database", function (done) {
                var username = "RBK"
                User.findOneAndRemove({username: username}, function (err, deleted) {
                    should.not.exist(err)
                    deleted.username.should.equal("RBK")
                    done()
                })
            })
        })
    })
    describe("Nested Docs", function () {
        it("create a nested document inside user model", function (done) {
            var user = new User({
                username: "Mark zuccer",
                events: [{
                    creator: "not Mark",
                    eventName: "Hiking",
                    duration: "2",
                    startDate: "someDate",
                    place: "Amman",
                    eventType: "Sports",
                    cost: 50,
                    description: "Fun event"
                }]
            })

            user.save(function (err, user) {
                expect(user.events.length).to.equal(1)
                done()
            })
        })
        it("should be able to push events to a found model", function (done) {
            User.findOne({username: "Mark zuccer"}, function (err, foundUser) {
                var newEvent = {
                    creator: "not zuccer",
                    eventName: "skating",
                    duration: "2",
                    startDate: "someDate",
                    place: "Amman",
                    eventType: "Sports",
                    cost: 50,
                    description: "Fun event"
                }

                foundUser.events.push(newEvent)

                expect(foundUser.events.length).to.equal(2)
                done()
            })
        })

        it("should be able to add event within a user document", function (done) {
            User.findOne({username: "Mark zuccer"}, function (err, foundUser) {
                var brandNewEvent = {
                    creator: "Lawrance",
                    eventName: "skydiving",
                    duration: "1",
                    startDate: "someDate",
                    place: "Amman",
                    eventType: "Sports",
                    cost: 50,
                    description: "Fun event"
                }

                foundUser.events.push(brandNewEvent)

                expect(foundUser.events.length).to.equal(2)
                done()
            })
        })
    })

    after(function (done) {
        mongoose.connection.db.dropDatabase(function () {
            mongoose.connection.close(done)
        })
    })
})
