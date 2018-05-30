import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { Route, Link, Switch, browserHistory, BrowserRouter as Router} from 'react-router-dom'
import $ from 'jquery'
import Message from './Message.jsx'

class Mail extends Component {
  constructor (props) {
    super(props)
    this.state = {
      to: '',
      from: '',
      text: '',
      date: '',
      messages: []
    }
    this.onChange = this.onChange.bind(this)
    this.sendMessage = this.sendMessage.bind(this)
  }

  onChange (e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [name]: value
    })
  }
  componentDidMount () {
    var that = this
    $.ajax({
      url: '/messages',
      type: 'GET',
      success: (data) => {
        console.log('in ajax get :', data)
        that.setState({
          messages: data.reverse()
        })
      }
    })
  }
  sendMessage () {
    $.ajax({
      url: '/messages',
      type: 'POST',
      data: this.state,
      success: (data) => {
        console.log('in ajax post :', data)
      }
    })
  }

  render () {
    return (
      <div>
        <section id='contact' bsStyle=''>
          <div className='container'>
            <div className='row'>
              <div className='titleline-icon' />
              <center><p bsStyle='color:#fff;'className='content-header wow fadeIn ' data-wow-delay='0.2s' data-wow-duration='2s'><h2>Get In Touch</h2> </p></center>
            </div>
            <div className='about_our_company' bsStyle='margin-bottom: 20px;'>
              <h1 bsStyle='color:#fff;'>Write Your Message</h1>
            </div>
            <div className='row'>
              <div className='col-md-8'>
                <form name='sentMessage' id='contactForm' novalidate=''>
                  <div className='row'>
                    <div className='col-md-6'>
                    </div>
                    <FormGroup>
                <ControlLabel>Recipent</ControlLabel>
                <FormControl
                  name="to"
                  type="text"
                  placeholder="Send to..."
                  onChange={this.onChange}
                        />
                <ControlLabel>Message</ControlLabel>
                <FormControl name="text" componentClass="textarea" onChange={this.onChange} placeholder="Enter your message here..." />
                 <div className='group'>
                    <button type='submit' className='btn btn-warning col-xs-3 col-xs-offset-9' onClick={this.sendMessage} >Send
                        <span className='glyphicon glyphicon-send' /></button>
                 </div>
              </FormGroup>
                 <div>
                {this.state.messages.map((message)=>
                  <Message
                  key={message._id}
                  message={message} />
                  )}
                 </div>
                    <div className='clearfix' />
                    <div className='col-lg-12 text-center'>
                      <div id='success' />                     
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Mail
