import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Navbar,Nav,NavItem,Carousel,Jumbotron,Button,ButtonToolbar,
  Overlay,Popover,OverlayTrigger} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import Events from './Events.jsx';
import EventList from './EventList.jsx';
import Eventitems from './Eventitems.jsx';
import AppRouter from '../routes/AppRouter.jsx';
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from "react-router-dom";


class EventInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events:[]
    };
  this.onChange=this.onChange.bind(this);
  this.componentDidMount = this.componentDidMount.bind(this);
  }


  onChange (e) {
    this.setState({
     [e.target.name]: e.target.value 
   });
  }
componentDidMount() {
    $.ajax({
      type: 'GET',
      url: '/allevents',
      success: (data) => {
        var newData = this.state.events.concat([data]);  
        this.setState({events: newData})
      },
      error: (err) => {
        console.log('err', err);
      }
    });
      
  }
  render(){
    return (
  		<div>
      <h1>{this.props.event}</h1>
      </div>
      )
  }
}
export default EventInfo;
