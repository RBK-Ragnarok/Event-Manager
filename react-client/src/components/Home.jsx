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
        <h1 id='h1'><b>Welcome to Slab</b></h1>
        <div id='Carousel1' className='devImg'>      
          <Carousel>
            <Carousel.Item className='img'>
              <img className='img' alt='900x500' src='../photos/img1.jpg' />
            </Carousel.Item>
            <Carousel.Item className='img'>
              <img className='img' alt='900x500' src='../photos/img2.jpg' />
            </Carousel.Item>
            <Carousel.Item className='img'>
              <img className='img' alt='900x500' src='../photos/img3.jpg' />
            </Carousel.Item>
            <Carousel.Item className='img'>
              <img className='img' alt='900x500' src='../photos/img4.jpg' />
            </Carousel.Item>
            <Carousel.Item className='img'>
              <img className='img' alt='900x500' src='../photos/img5.jpg' />
            </Carousel.Item>
          </Carousel>
        </div>
        <br />
        <br />

        <div id='desc'>
          <h2>Description:</h2>
          <p> Connect with friends and the world around you with Slab. 
          You can create events or attend as many as you want, meet new people and learn new things.

          	The name SLAB is a combination of the  first letter of each team member and it is used
          as an attend button in the events page. press Slab on an event and count yourself in.
          </p>
        </div>
        <footer className='navbar-bottom footer'>
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
