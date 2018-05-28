import React from 'react'
import ReactDOM from 'react-dom'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { Route, Link, Switch, browserHistory, BrowserRouter as Router} from 'react-router-dom'
import $ from 'jquery'
import login from './login.jsx'
import Home from './Home.jsx'

class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      email: '',
      loggedIn: false,
      age: '',
      gender: '',
      about: ''
    }
    this.onChange = this.onChange.bind(this)
    this.Signup = this.Signup.bind(this)
  }

  onChange (e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }

  Signup () {
    var that = this
    $.ajax({
      url: '/signup',
      type: 'POST',
      data: this.state,
      success: (data) => {
        console.log('in ajax post :', data)
        if (data === '201') {
          that.setState({loggedIn: true})
          window.location.href = '/'
        } else {
          that.setState({loggedIn: false})
          window.location.href = '/signup'
        }
      }
    })
  }

  render () {
    if (this.state.loggedIn == true) {
      return (
        <Router>

          <Route path='/' component={Home} />

        </Router>
      )
    } else {
      return (
        <div className='container-fluid stylish-form'>
          <h2 className='text-center'>Thank You For Visiting Us</h2>
          <div className='row mar20' >
            <div className='col-md-12 col-sm-12 col-xs-12'>
              <div className='inner-section'>
                <form method='POST' action='https://google.co.in'>
                  <div className='mar20 inside-form'>
                    <h2 className='font_white text-center'>SIGN UP</h2>
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
                      <span className='input-group-addon'><i className='fa fa-envelope ' /></span>
                      <input type='email' className='form-control' name='email' onChange={this.onChange} placeholder='Email...'
                        required value={this.state.email} />
                    </div>
                    <div className='input-group'>
                      <span className='input-group-addon'><i className='fa fa-lock ' /></span>
                      <input type='password' className='form-control' name='password' onChange={this.onChange} placeholder='Password...'
                        required value={this.state.password} />
                    </div>
                    <div className='input-group'>
                      <span className='input-group-addon'><i className='fa fa-child ' /></span>
                      <input type='age' className='form-control' name='age' onChange={this.onChange} placeholder='Age...'
                        required value={this.state.age} />
                    </div>
                    <FormGroup controlId='formControlsSelect'>
                      <FormControl componentClass='select' placeholder='Gender' name='gender' onChange={this.onChange} required value={this.state.gender}>
                        <option hidden>Gender</option>
                        <option value='female'>Female</option>
                        <option value='male'>Male</option>
                      </FormControl>
                    </FormGroup>
                    <div className='footer text-center'>
                      <Router>
                        <Link to='/' ><button className='col-xs-4 col-xs-offset-4' type='Submit' onClick={this.Signup}>Signup</button></Link>
                      </Router>
                    </div>
                  </div>
                </form>
              </div>
              <div className='wrapper col-xs-4 col-xs-offset-4'>
                <br />
                <h5>Do you have Account?</h5>
                <h5>Login here <a href='/login'>LOGIN &rarr;</a></h5>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Signup
