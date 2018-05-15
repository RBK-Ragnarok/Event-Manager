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
      iseventhiddin:true
      //show: false
    };
  data:'';
  this.onChange=this.onChange.bind(this);
    this.showeventbox=this.showeventbox.bind(this);
    //  this.handleClick = e => {
    //   this.setState({ target: e.target, show: !this.state.show });
    // };
  }

  onChange (e) {
    this.setState({
     [e.target.name]: e.target.value 
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
    <h1 className="display-3" className="col-*-*">{this.props.event.name}</h1>
    <br></br>
    <p className="lead">Event description :</p>
    <table className="table">
      <th col>Date:</th>
      <th col>Duration:</th>
      <th col>Price:</th>
  </table>
  </div>
  <ButtonToolbar>
<OverlayTrigger trigger="click" placement="left" overlay={<Popover title={this.props.event.name}><strong>Tabs
Dropdowns
Accordions
Convert Weights
Animated Buttons
Side Navigation
Top Navigation
Modal Boxes
Progress Bars
Parallax
Login Form
HTML Includes
Google Maps
Range Sliders
Tooltips
Slideshow
Filter List
Sort List</strong></Popover>}>
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