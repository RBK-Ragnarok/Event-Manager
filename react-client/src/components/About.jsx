import React, {Component} from 'react'
import Home from './Home.jsx'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {ButtonGroup, Button, ButtonToolbar } from 'react-bootstrap'

class About extends React.Component {
  constructor (props) {
    super(props)
    this.setState = {
      username: '',
      email: '',
      message: ''
    }
    this.onChange = this.onChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  onChange (e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({[name]: value})
  }

  sendMessage () {
    $.ajax({
      url: '/about',
      type: 'POST',
      data: this.state,
      success: (data) => {
        console.log('message added')
        that.setState({message: 'message Adeed'})
      },
      error: (err) => {
        console.log('err', err)
      }
    })
  }

  render () {
    return (
      <div id='about' className='container-fluid stylish-form'>
        <div id='diiv'>
          <div className='container'>
            <div className='row main'>
              <div className='w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32' id='about'>
                <div id='div1'>
                  <h3 id='h3'><b>About Us</b></h3>
                  <img id='img' src='https://www.thecareersgroup.co.uk/media/1929/contact-us-banner.png' alt='Me' className='w3-image w3-padding-32' />
                  <div className='w3-content w3-justify' >
                    <h4>Who are we?</h4>
                    <p>We are Ragnarok, RBK thesis project group, our team is 4 members big, Belal Faouri, Abdullah AlRamahi, Sara Koki and Lena Salamat, our main goal is to make an app that gathers people who share the same interests and passions, this app is a work in
                      progress as all software apps are, but we can always hope that it will keep on improving. </p>

                  </div>
                </div>
                <br />
                <div className='col-xs-4 col-xs-offset-4' id='div2' >
                  <h3 id='h3'>Contact Us ..</h3>
                  <br />
                  <div className='w3-container w3-padding-large w3-grey'>
                    <ButtonGroup justified>
                      <Button className='fa fa-envelope w3-xxlarge w3-text-light-grey' href='#'>   email@email.com</Button>
                      <Button className='fa fa-map-marker w3-xxlarge w3-text-light-grey' href='#'>  jordan,amman</Button>
                      <Button className='fa fa-phone w3-xxlarge w3-text-light-grey' href='#'>  512312311</Button>
                    </ButtonGroup>
                  </div>
                  <br />

                  <div className='input-group'>
                    <span className='input-group-addon'><i className='fa fa-pencil ' /></span>
                    <input type='text' className='form-control' placeholder='User Name...' name='username' placeholder='Username...' /* onChange={this.onChange} value={this.state.username} */
                      required autoFocus />
                  </div>
                  <div className='input-group'>
                    <span className='input-group-addon'><i className='fa fa-envelope ' /></span>
                    <input type='email' className='form-control' name='email' placeholder='Email...' /* onChange={this.onChange} value={this.state.email} */
                      required />
                  </div>
                  <div className='input-group'>
                    <span className='input-group-addon'><i className='fa fa-pencil ' /></span>
                    <input type='text' className='form-control' placeholder='Message...' name='message' placeholder='Message...' /* onChange={this.onChange} value={this.state.message} */
                      required autoFocus />
                  </div>
                  <button className='col-xs-4 col-xs-offset-4' onClick={this.sendMessage} type='Submit'>Send Message</button>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
