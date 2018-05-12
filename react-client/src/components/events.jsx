import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Navbar,Nav,NavItem,Carousel} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from "react-router-dom";

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      events:[]
    };
    
    this.onChange=this.onChange.bind(this);
  }

  onChange (e) {
    this.setState({
     [e.target.name]: e.target.value 
   });
  }
render(){

 return (
  <div>
 
  <Navbar classNmae="devNav">
        <Navbar.Header>
            <Navbar.Brand >
            </Navbar.Brand>
          </Navbar.Header>        
        <Nav pullRight className='nav'>
        <NavItem eventKey='Home'><p>Home</p></NavItem>
        <NavItem eventKey='Profile'><p>Profile</p></NavItem>
        <NavItem eventKey='Logout'><p>Logout</p></NavItem>
        </Nav>
        </Navbar>
  
  )
  </div>
   )
  const List = (props) => (
  <div>
    <h4> List Component </h4>
     { this.props.items.length } 
    { this.props.items.map(item => <EventsList item={item}/>)}
  </div>
)
   }
}


class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      content:'',
      event:[]  
    };
}
render(){
 return (
  <div> 
    <h4> Events List </h4>
  </div>
   
 )
   }
}
export default Events;