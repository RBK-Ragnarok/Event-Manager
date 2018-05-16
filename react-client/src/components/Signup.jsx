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
      about: '',
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

        <div className='container'>
        <h3 className="form-Signup-heading"><b>Signup</b></h3>
        <br/>
        <br/>
        <br/>
          <div className='wrapper col-xs-4 col-xs-offset-4'>

            <form className='form-Signup'>
              <FormControl type='text' className='form-control' name='username' onChange={this.onChange} placeholder='Username' required autoFocus value={this.state.username} /><br />
              <FormControl type='password' className='form-control' name='password' onChange={this.onChange} placeholder='Password' required value={this.state.password} /><br />
              <FormControl type='email' className='form-control' name='email' onChange={this.onChange} placeholder='Email' required value={this.state.email} /><br />
              <FormControl type='age' className='form-control' name='age' onChange={this.onChange} placeholder='Age' required value={this.state.age} /><br />
              
              <FormControl type='about' className='form-control' name='about' onChange={this.onChange} placeholder='About' required value={this.state.about} /><br />
              <Router>
                <Link to='/' ><button className='col-xs-4 col-xs-offset-4' type='Submit' onClick={this.Signup}>Signup</button></Link>
              </Router>
            </form>
          </div>
          <br />
        <br />
        <br />
        <div className='wrapper col-xs-4 col-xs-offset-4'>
        <br />
          <h5>Do you have Account?</h5>
            <h5>Login here <a href='/login'>LOGIN &rarr;</a></h5>  
          </div>
        </div>
      )
    }
  }
}

export default Signup
