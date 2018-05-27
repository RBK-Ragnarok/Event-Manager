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
      <div className='container-fluid stylish-form'>
        <div id='diiv'>
          <div className='container'>
            <div className='row main'>
              <div className='w3-container w3-dark-grey w3-center w3-text-light-grey w3-padding-32' id='about'>
                <div id='div1'>
                  <h3 id='h3'><b>About Us</b></h3>
                  <img id='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT50T7lDUD2E0p0f5G8x6EohkKX66zCtviKK8oZirEtp3UFbcOSiA' alt='Me' className='w3-image w3-padding-32' />
                  <div className='w3-content w3-justify' >
                    <h4>Who are we?</h4>
                    <p>Some text about me. I love taking photos of PEOPLE. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,</p>

                  </div>
                </div>
                <br />
                <div id='div2' >
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
                </div>
                <br />
                <button className='col-xs-4 col-xs-offset-4' onClick={this.sendMessage} type='Submit'>Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
