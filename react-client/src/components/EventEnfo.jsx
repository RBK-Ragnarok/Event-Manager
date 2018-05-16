import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AppRouter from '../routes/AppRouter.jsx';
import Events from './Events.jsx';
import Eventitems from './Eventitems.jsx';
import {Navbar,Nav,NavItem,Carousel,Jumbotron,Button,ButtonToolbar,
  Overlay,Popover,OverlayTrigger} from 'react-bootstrap';
import EventList from './EventList.jsx';
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from "react-router-dom";


class EventEnfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'name',
    description:'description'
    };
  this.onChange=this.onChange.bind(this);
  }


  onChange (e) {
    this.setState({
     [e.target.name]: e.target.value 
   });
  }
// componentDidMount(info) {
//     $.ajax({
//       type: 'GET',
//       url: '/info',
//       success: (data) => {
//         this.setState({
//           data: data
//         })
//       },
//       error: (err) => {
//         console.log('err', err);
//       }
//     });
      
//   }
  render(){
  	return (
  		<div>
      <div className="row" className="jumbotron jumbotron-fluid" className='col-md-7 col-md-offset-2'>
  		<Jumbotron>
  <h1>{this.props.event.eventName}</h1>
  <p>{this.props.event.description}
  </p>
  <p>
    <Button bsStyle="primary">Attend</Button>
  </p>
</Jumbotron>
  		</div>
      </div>
  )
  }
}
export default EventEnfo;