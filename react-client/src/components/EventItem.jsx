import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {Navbar, Nav, NavItem, Carousel, Jumbotron, Button, ButtonToolbar,
  Overlay, Popover, OverlayTrigger} from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import Events from './Events.jsx'
import EventList from './EventList.jsx'
import EventInfo from './EventInfo.jsx'
import Profile from './Profile.jsx'
import AppRouter from '../routes/AppRouter.jsx'
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from 'react-router-dom'

class EventItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: '',
      name: '',
      description: '',
      iseventhiddin: true,
      data: ''
      // show: false
    }

    this.onChange = this.onChange.bind(this)
    this.showeventbox = this.showeventbox.bind(this)
    //  this.handleClick = e => {
    //   this.setState({ target: e.target, show: !this.state.show });
    // };
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
      // [e.target.description]: e.target.value
    })
  }
  showeventbox (name, description) {
    this.setState({
      iseventhiddin: !this.state.iseventhiddin,
      name: name,
      description: description
    })
  }

  render () {
  	return (
      <div>
<div className="container" style={{display: 'flex', justifyContent: 'center'}}>
   <h2 onClick={()=> this.showeventbox(this.items)} >{this.items}</h2>
  </div>
   <div id="jumbotron" className="col-xs-3 col-xs-offset-4">
    <div>
      <img id="lolo"src="https://images.pexels.com/photos/434302/pexels-photo-434302.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="John"/>
      <h1><b>MyName: {this.props.event.creator} .</b></h1>
      <h2 className="w3-opacity"><b>EventName: {this.props.event.eventName}.</b></h2>
      <h3><b>Place : </b>{this.props.event.place} .</h3>
      <p><Link to={`/eventinfo/${this.props.event._id}`}><button className="w3-button w3-light-grey btn btn-primary w3-block"
       onClick={this.componentDidMount}>More Info</button> </Link></p>
    </div>
    </div>
</div>
      
       )
  }
}

// <Link to='/EventEnfo' ><button className='col-xs-4 col-xs-offset-4' type='Submit' onClick={this.componentDidMount}>More info</button></Link>

export default EventItem
