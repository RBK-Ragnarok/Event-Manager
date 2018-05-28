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
      <div>
        <div className='container-fluid stylish-form'>
          <h2 className='text-center'>Thank You For Visiting Us</h2>
          <div className='row mar20' >
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='inner-section'>
                <form method='POST' action='https://google.co.in'>
                  <div className='mar20 inside-form'>
                    <h2 className='font_white text-center'>LOG IN</h2>
                    <ul>
                      <li className='icon-holder dsp-flex'>
                        <i className='fa fa-facebook ' />
                      </li>
                      <li className='icon-holder dsp-flex'>
                        <i className='fa fa-twitter ' />
                      </li>
                      <li className='icon-holder dsp-flex'>
                        <i className='fa fa-instagram ' />
                      </li>
                    </ul>
                    <div className='input-group'>
                      <span className='input-group-addon'><i className='fa fa-pencil ' /></span>
                      <input type='text' className='form-control' placeholder='User Name...'name='username' onChange={this.onChange} placeholder='Username...'
                        required autoFocus value={this.state.username} />
                    </div>
                    <div className='input-group'>
                      <span className='input-group-addon'><i className='fa fa-lock ' /></span>
                      <input type='password' className='form-control' name='password' onChange={this.onChange} placeholder='Password...'
                        required value={this.state.password} />
                    </div>
                    <div className='footer text-center'>
                      <Router>
                        <Link to='/' > <button className='col-xs-4 col-xs-offset-4' onClick={this.Login} type='Submit'>Login</button></Link>
                      </Router>
                    </div>
                  </div>
                </form>
              </div>
              <div className='wrapper col-xs-4 col-xs-offset-4'>
                <br />
                <h5>Dont have an Account?</h5>
                <h5>Signup here <a href='/signup'>SIGNUP &rarr;</a></h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default login
