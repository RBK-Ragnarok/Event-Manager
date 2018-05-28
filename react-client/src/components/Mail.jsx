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
      to:'',
      from:'',
      text:'',
      date:'',
      messages:[]
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
componentDidMount(){
  var that=this;
  $.ajax({
    url: '/messages',
    type: 'GET',
    success: (data) => {
      console.log('in ajax get :', data)
      that.setState({
        messages:data
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
    return(

              <div className="container">
            <form>
                   <FormGroup
                     controlId="formBasicText"
                   >
                     <ControlLabel>Recipent</ControlLabel>
                     <FormControl
                      name="to"
                       type="text"
                       placeholder="Send to..."
                       onChange={this.onChange}
                     />

                     <FormGroup controlId="formControlsTextarea">
                       <ControlLabel>Message</ControlLabel>

                       <FormControl name="text" componentClass="textarea" onChange={this.onChange} placeholder="Enter your message here..." />
                     </FormGroup>
                     <Button className="btn btn-lg submit" onClick={this.sendMessage}>Send</Button>
                     <FormControl.Feedback />
                   </FormGroup>
                 </form>
                 <div style={{ height: '500px' }}>
                 {(this.state.messages).map(message=>{
                   <Message key={message._id} message={message} />
                  })
                  }
                 </div>

                 </div>
    )
  }
}

export default Mail
