import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Navbar,Nav,NavItem,Carousel,Jumbotron,Button,ButtonToolbar,
  Overlay,Popover,OverlayTrigger} from 'react-bootstrap';
//import { Link } from 'react-router-dom';
import Events from './Events.jsx';
import EventList from './EventList.jsx';
import EventEnfo from './EventEnfo.jsx';
import AppRouter from '../routes/AppRouter.jsx';
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from "react-router-dom";

class Eventitems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items:'',
      name:'',
      description:'',
      iseventhiddin:true,
      data:'',
      //show: false
    };
  
    this.onChange=this.onChange.bind(this);
    this.showeventbox=this.showeventbox.bind(this);
    //  this.handleClick = e => {
    //   this.setState({ target: e.target, show: !this.state.show });
    // };
  }

  onChange (e) {
    this.setState({
     [e.target.name]: e.target.value ,
     [e.target.description]: e.target.value 
   });
  }
showeventbox(name,description){
  this.setState({
    iseventhiddin: ! this.state.iseventhiddin,
    name:name,
    description:description,
  });
}



  render(){
  	return (
  		<div>   
   <div className="container" style={{display: 'flex', justifyContent: 'center'}}>      
   <h2 onClick={()=> this.showeventbox(this.items)} >{this.items}</h2>
   </div>
 <div className="row" className="jumbotron jumbotron-fluid" id='jumbotron'className='col-md-6 col-md-offset-3' >
  <div className="container" className="fixed-bottom">
    <h1 className="display-3" className="col-*-*" className="glyphicon -globe fa-3x">EventName: {this.props.event.eventName}</h1>
    <br></br>
    <br></br>
    <p className="fa-2x">Event description :{this.props.event.description}</p>
    <br></br>
    <table className="table">
      <a className="fa-2x">Date : {this.props.event.startDate}</a>
      <br></br>
      <a className="fa-2x">Place : {this.props.event.place}</a>
      
  </table>
  <br></br>
  </div>
  <ButtonToolbar>
<OverlayTrigger trigger="click" placement="left" overlay={<Popover title={this.props.event.eventName}>
<Link to='/EventEnfo' ><button  type='Submit'
 onClick={this.componentDidMount}>Attind</button></Link>
 <br></br>
<strong>EventType : {this.props.event.eventType}<br></br><br></br>
duration : {this.props.event.duration}<br></br><br></br>cost : {this.props.event.cost}</strong></Popover>}>
  <Button>More info!</Button>
</OverlayTrigger>
</ButtonToolbar>
</div>
      </div>
       )
  }
}

 // <Link to='/EventEnfo' ><button className='col-xs-4 col-xs-offset-4' type='Submit' onClick={this.componentDidMount}>More info</button></Link>

export default Eventitems;