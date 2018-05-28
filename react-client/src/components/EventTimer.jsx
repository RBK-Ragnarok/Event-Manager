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

class EventTimer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
  componentWillMount () {
    this.getTimeUntil(this.props.deadline)
  }

  componentDidMount () {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }

  leading0 (num) {
    return num < 10 ? '0' + num : num
  }

  getTimeUntil (deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date())
    const seconds = Math.floor((time / 1000) % 60)
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const hours = Math.floor(time / (1000 * 60 * 60) % 24)
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    this.setState({
      days,
      hours,
      minutes,
      seconds
    })
  }
  render () {
    return (
      <div>
        <div>
          <div className='Clock-days'>{this.leading0(this.state.days)} days</div>
          <div className='Clock-hours'>{this.leading0(this.state.hours)} hours</div>
          <div className='Clock-minutes'>{this.leading0(this.state.minutes)} minutes</div>
          <div className='Clock-seconds'>{this.leading0(this.state.seconds)} seconds</div>
        </div>
      </div>
    )
  }
}

export default EventTimer
