import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import { Link } from 'react-router-dom';
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
         eventName: '',
          duration: '',
          startDate: '',
          place:'',
          eventType: '',
          cost: '',
          description: '',
          message:''

    };
  this.onChange=this.onChange.bind(this);
  }


  onChange (e) {
    this.setState({
     [e.target.name]: e.target.value 
   });
  }
  componentWillMount(){
    console.log("hello",this.props.match.params.id)
  }
componentDidMount(info) {
    $.ajax({
      type: 'Post',
      url: `/EventInfo/${this.props.match.params.id}`,
      success: (data) => {
        var eventinfo = this.state.events.concat([data]);
        this.setState({
          eventName: eventinfo.eventName,
          duration: eventinfo.duration,
          startDate: eventinfo.startDate,
          place:eventinfo.place,
          eventType: eventinfo.eventType,
          cost: eventinfo.cost,
          description: eventinfo.description,
          message:eventinfo.message
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
      
  }
  render(){
  		return (
        <div>
        <h1>{this.state.eventName}</h1>
        
          
            
            </div>
 
       )   
  }
}
export default EventInfo;

