var mongoose = require('mongoose')
var assert = require('assert')
var User = require('../database-mongo/User')
var userFunctions = require('../database-mongo/user-handler')
var eventSchema = require('../database-mongo/Event')
var eventFunctions = require('../database-mongo/event-handler')

describe('User Model', function () {
  describe('User', function () {
    it('should save new user', function () {
      var user = new User({
        userName: 'Rbk',
        passWord: 'Rbk',
        Email: 'Rbk',
        ownedEvents: [eventSchema.EventSchema],
        attendingEvents: [eventSchema.EventSchema],
        Age: 22,
        gender: 'Rbk',
        rating: 5
      })

      assert.equal(user, userFunctions.userSave(req, res))
    })
  })
})
