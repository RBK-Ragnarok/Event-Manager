import React, {Component} from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
// import axios from 'axios';
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from 'react-router-dom'
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
      <div id='loginpage' className='container'>
        <div className='wrapper'>

          <form className='form-signin'>
            <h3 className='form-signin-heading'>
              <b id='b'>Login</b>
            </h3>
            <FormControl id='loguser' type='text' className='form-control' name='username' onChange={this.onChange} placeholder='Username' required autoFocus value={this.state.username} /><br />
            <FormControl id='logpass' type='password' className='form-control' name='password' onChange={this.onChange} placeholder='Password' required value={this.state.password} /><br />
            <FormControl id='logemail' type='email' className='form-control' name='email' onChange={this.onChange} placeholder='email' required value={this.state.email} /><br />
            <Router>
              <Link to='/' > <button id='logb' className='btn btn-lg btn-primary' onClick={this.Login} type='Submit'>Login</button></Link>
            </Router>
          </form>
        </div>
        <div >
          <a href='/Home'>Home &rarr;</a>
        </div>

      </div>

    )
  }
}

export default login
