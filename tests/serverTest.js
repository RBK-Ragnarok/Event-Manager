const chai=require('chai')
const app=require('../server/index.js')
const request=require('supertest')

var expect=chai.expect;

describe('App',function(){


  it('should respond to GET with empty path', function (done) {
     request(app)
            .get('')
            .expect(200)
            .end(done)
  });
  it('should respond to GET on user path', function (done) {
     request(app)
            .get('/user')
            .expect(200)
            .end(done)
  });

  it('should respond to GET on users path', function (done) {
     request(app)
            .get('/user')
            .expect(200)
            .end(done)
  });
  it('should be able to signup', function (done) {
     request(app)
            .post('/signup')
            .send({username:'rbk',password:"rbk",email:"rbk@rbk.com",age:2,gender:'Male'})
            .expect(200,"User already exists!")
            .end(done)
  });

  it('should be able to logout', function (done) {
     request(app)
            .get('/logout')
            .expect(200)
            .end(done)
  });
  it('should not login with incorrect info', function (done) {
     request(app)
            .post('/login')
            .send({username:'rbk',password:"rb"})
            .expect(404)
            .end(done)
  });

  it('should login with correct info', function (done) {
     request(app)
            .post('/login')
            .send({username:'rbk',password:"rbk"})
            .expect('201')
            .end(done)
  });

})
