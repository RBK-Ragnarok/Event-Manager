var mongoose = require('mongoose')
var expect = require('chai').expect;
var should = require('should');
var Event = require('../../database-mongo/Event')
var eventFunctions = require('../../database-mongo/event-handler')


describe('Database Tests', function() {

  before(function (done) {
    mongoose.connect('mongodb://localhost/testDatabase');
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error'));
    db.once('open', function() {
      console.log('We are connected to test database!');
      done();
    });
  });

   describe('Event: models', function () {

     describe('create Model', function () {
       it('should create a new Event', function (done) {
         Event.create({eventName:"skydiving"}, function (err, createdEvent) {
         });
         var e = {
           eventName:'skating'
         };
         Event.create(e, function (err, createdEvent) {
           should.not.exist(err);
           createdEvent.eventName.should.equal('skating');
           done();
         });
       });

       it('should find an Event by eventName', function (done) {


         Event.findOne({eventName:'skating'}, function (err, foundEvent) {
           should.not.exist(err);
           foundEvent.eventName.should.equal('skating');
           done();
         });
       });

       it('should get all events in database', function (done) {


         Event.find({}, function (err, events) {
           should.not.exist(err);
           events.length.should.equal(2);
           done();
         });
       });

       it('should remove a event from database', function (done) {
         var eventName = 'skating'
         Event.findOneAndRemove({eventName: eventName}, function (err, deleted) {
          should.not.exist(err)
           deleted.eventName.should.equal('skating')
           done()
         })

       });


     });

   });

  after(function(done){
    mongoose.connection.db.dropDatabase(function(){
      mongoose.connection.close(done);
    });
  });
});
