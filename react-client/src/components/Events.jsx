import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Navbar,Nav,NavItem,Carousel} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import EventList from './EventList.jsx';
import Eventitems from './Eventitems.jsx';
import EventInfo from './EventInfo.jsx';
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
      term: '',
      events: [],
      description:''

    };
    this.onChange = this.onChange.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    //this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ term: event.target.value });
  }

  // onSubmit(event){
  //   event.preventDefault();
  //   this.setState({
  //     term: '',
  //     events: [...this.state.events, this.state.term]
  //   });
  // }
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

  render() {
    return (
      <div>
        <EventList events={this.state.events} />
      </div>
    );
  }
}


export default Events;