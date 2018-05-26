import React, {Component} from 'react'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavItem, Carousel} from 'react-bootstrap'
import login from './login.jsx'
import Signup from './Signup.jsx'
import axios from 'axios'
import CreateEvent from './CreateEvent.jsx'

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: []
    }
    this.showSignup = this.showSignup.bind(this)
  }

  showSignup () {
    this.setState()
  }

  render () {
    return (
     
      <div>
        
      </div>
    )
  }
}
export default Home