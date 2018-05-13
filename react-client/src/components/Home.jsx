import React, {Component} from 'react'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavItem, Carousel} from 'react-bootstrap'
import login from './login.jsx'
import Signup from './Signup.jsx'
import axios from 'axios'

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

        <h1 id='h1'>Events</h1>

        <div id='Carousel1' className='devImg'>
          <Carousel>
            <Carousel.Item className='img'>
              <img className='img' alt='900x500' src='../photos/bisycle.jpeg' />
            </Carousel.Item>
            <Carousel.Item className='img'>
              <img className='img' alt='900x500' alt='900x500' src='../photos/happy.jpeg' />
            </Carousel.Item>
            <Carousel.Item className='img'>
              <img className='img' alt='900x500' src='../photos/happy1.jpeg' />
            </Carousel.Item>
            <Carousel.Item className='img'>
              <img className='img' alt='900x500' src='../photos/party.jpeg' />
            </Carousel.Item>
            <Carousel.Item className='img'>
              <img className='img' alt='900x500' src='../photos/party1.jpeg' />
            </Carousel.Item>
          </Carousel>
        </div>
        <footer className='navbar-fixed-bottom footer'>
          <div className='container'>
            <div className='row'>
              <h4> Contact Us :</h4>
              <SocialIcon url='http://twitter.com' />
              <SocialIcon url='http://facebook.com' />
              <SocialIcon url='http://slack.com' />
              <SocialIcon url='http://github.com' />
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
export default Home
