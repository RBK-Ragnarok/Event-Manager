import React, {Component} from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
// import axios from 'axios';
import { Route, Link, Switch, browserHistory, BrowserRouter as Router} from 'react-router-dom'
import $ from 'jquery'
import Home from './Home.jsx'

class login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      loggedIn: false
    		}
    this.onChange = this.onChange.bind(this)
    this.Login = this.Login.bind(this)
  }

  onChange (e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({[name]: value})
  };

  Login () {
    var that = this

	   $.ajax({
	   url: '/login',
	   type: 'POST',
	   data: this.state,
	   success: (data) => {
        if (data === '201') {
          that.setState({loggedIn: true})
          window.location.href = '/'
        } else {
          that.setState({loggedIn: false})
          window.location.href = '/login'
        }
	 }
    })
  }

  render () {
    return (
      <div className='container'>
        <h3 className='form-Signup-heading'><b>Login</b></h3>
        <br />
        <br />
        <br />
        <div className='wrapper col-xs-4 col-xs-offset-4'>

          <form className='form-signin'>
            <FormControl type='text' className='form-control' name='username' onChange={this.onChange} placeholder='Username' required autoFocus value={this.state.username} /><br />
            <FormControl type='password' className='form-control' name='password' onChange={this.onChange} placeholder='Password' required value={this.state.password} /><br />
            <Router>
              <Link to='/' > <button className='col-xs-4 col-xs-offset-4' onClick={this.Login} type='Submit'>Login</button></Link>
            </Router>
          </form>
        </div>
        <br />
        <br />
        <br />
        <div className='wrapper col-xs-4 col-xs-offset-4'>
          <br />
          <h5>Dont have an Account?</h5>
          <h5>Signup here <a href='/signup'>SIGNUP &rarr;</a></h5>
        </div>

      </div>

    )
  }
}

export default login
