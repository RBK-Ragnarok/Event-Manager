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
import EventTimer from './EventTimer.jsx'
import AppRouter from '../routes/AppRouter.jsx'
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from 'react-router-dom'

class EventItemProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: '',
      name: '',
      description: '',
      iseventhiddin: true,
      img: '',
      data: '',
      deadline: this.props.event.startDate,
      newDeadline: ''
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
  changeDeadline () {
    this.setState({
      deadline: this.state.newDeadline
    })
  }
  showeventbox (name, description) {
    this.setState({
      iseventhiddin: !this.state.iseventhiddin,
      name: name,
      description: description
    })
    // [e.target.name]: e.target.value ,
    // [e.target.description]: e.target.value
  };

  render () {
    var data = this.props.event
    for (var key in data) {
      if (data[key] === 'Sports') {
        var url = 'https://images.pexels.com/photos/848618/pexels-photo-848618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        this.state.img = url
      }
      if (data[key] === 'Art') {
        var url2 = 'https://images.pexels.com/photos/395074/pexels-photo-395074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        this.state.img = url2
      }
      if (data[key] === 'Social') {
        var url3 = 'https://images.pexels.com/photos/207896/pexels-photo-207896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        this.state.img = url3
      }
      if (data[key] === 'Educational') {
        var url4 = 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        this.state.img = url4
      }
      if (data[key] === 'Political') {
        var url5 = 'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        this.state.img = url5
      }
    }

    return (
      <div>
      <div className='container' style={{display: 'flex', justifyContent: 'center'}}>
          <h2 onClick={() => this.showeventbox(this.items)} >{this.items}</h2>
        </div>
      <div id='jumbotron' className='col-xs-3 col-xs-offset-4'>
          <div>
          <div />
          <h1 className='w3-opacity'><b>Event Name: {this.props.event.eventName}.</b></h1>
          <h2><b>Event Creator: {this.props.event.creator} .</b></h2>
          <h3><b>Place : </b>{this.props.event.place} .</h3>
          Event starts in {this.state.deadline}
          <EventTimer deadline={this.state.deadline} />
        </div>
        </div>
    </div>
    )
  }
}

// <Link to='/EventEnfo' ><button className='col-xs-4 col-xs-offset-4' type='Submit' onClick={this.componentDidMount}>More info</button></Link>

export default EventItemProfile
