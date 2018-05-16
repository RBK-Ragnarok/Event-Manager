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
      events:[]
    }
  }


  render(){
    return (

      <div>
    {

     this.props.events.map(event2=>
      event2.map(event =>
      <Eventitems event={event} />))




     }
   </div>

       )
  }
}

export default EventList;