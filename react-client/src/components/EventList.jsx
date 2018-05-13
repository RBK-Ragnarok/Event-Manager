import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Navbar,Nav,NavItem,Carousel,Modal} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import Events from './Events.jsx';
import Eventitems from './Eventitems.jsx';
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from "react-router-dom";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  data:'';
  }


  render(){
  	return (
  		
  		<div>
    <ul>
    {
     this.props.events.map((event) => 
      <Eventitems key={event.name} key={event.description}event={event} />)
     }
   </ul>
   </div>

       )
  }
}

export default EventList;