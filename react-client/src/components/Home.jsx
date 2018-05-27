import React, {Component} from 'react'
import { SocialIcon } from 'react-social-icons'
import { Link } from 'react-router-dom'
import {Navbar, Nav, NavItem, Carousel} from 'react-bootstrap'
import login from './login.jsx'
import Signup from './Signup.jsx'
import axios from 'axios'
import $ from 'jquery'
import CreateEvent from './CreateEvent.jsx'
import About from './About.jsx'

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
            $(document).ready(function(){
var header = $('.main_banner ');

var backgrounds = new Array(
    'url(../photos/img1.jpg)'
  , 'url(../photos/img2.jpg)'
   , 'url(../photos/img3.jpg)'
   ,'url(../photos/img4.jpg)'
   ,'url(../photos/img5.jpg)'
  
  
);

var current = 0;

function nextBackground() {
    current++;
    current = current % backgrounds.length;
    header.css('background-image', backgrounds[current]);
}
setInterval(nextBackground, 5000);

header.css('background-image', backgrounds[0]);
});
    return (
     <div>
       <div id="firstPage" className="ha-bg-parallax main_banner " data-type="background" data-speed="10">
      <div className="ha-parallax-body">
    <div id="carousel-example-generic" className="carousel slide vertical text-right" data-ride="carousel"> 
         
          <ol className="carousel-indicators">
        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
      </ol>
          
          
          <div className="container">
        <div className="carousel-inner " role="listbox">
              <div className="item active">
            <h3 white data-wow-delay="0.1s"><b>Welcome to Slab</b></h3>
           <h1 className="section-header">Get in <span className="content-header wow fadeIn " data-wow-delay="0.2s" data-wow-duration="2s"> Touch with us</span></h1>
          </div>
            </div>
      </div>
        </div>
  </div>
    </div>
<div className="container text-center">
<h2>Description:</h2>
          <p> Connect with friends and the world around you with Slab. 
          You can create events or attend as many as you want, meet new people and learn new things.

            The name SLAB is a combination of the  first letter of each team member and it is used
          as an attend button in the events page. press Slab on an event and count youself in.
          </p>   <footer className='navbar-bottom footer'>
          <div className='container'>
            <div className='row'>
              <h4> Contact Us :</h4>
              <SocialIcon url='http://twitter.com' />
              <SocialIcon url='http://facebook.com' />
              <SocialIcon url='http://slack.com' />
              <SocialIcon url='http://github.com' />
            </div>
          </div>
        </footer> </div>
      </div>
    )
  }
}
export default Home
