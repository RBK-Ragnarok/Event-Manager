import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
//import { Link } from 'react-router-dom';
import AppRouter from '../routes/AppRouter.jsx';
import {Navbar,Nav,NavItem,Carousel,Jumbotron,Button,ButtonToolbar,
  Overlay,Popover,OverlayTrigger} from 'react-bootstrap';
import EventList from './Profile.jsx';
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
  this.add=this.add.bind(this);
  }


  onChange (e) {
    this.setState({
     [e.target.name]: e.target.value
   });
  }
  componentWillMount(){
    //console.log("hello",this.props.match.params.id)
  }
componentDidMount(info) {
    $.ajax({
      type: 'POST',
      url: `/event/${this.props.match.params.id}`,
      success: (data) => {
        // var eventinfo = this.state.events.concat([data]);
        console.log(data);
        this.setState({
          eventName: data.eventName,
          duration: data.duration,
          startDate: data.startDate,
          place:data.place,
          eventType: data.eventType,
          cost: data.cost,
          description: data.description,
          message:data.message,

        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }

add(event){
   var that = this
      $.ajax({
        url: '/user',
        type: 'PUT',
        data:this.state,
        success: (data) => {
          console.log('event added')
          that.setState({message:'Event Added'})
        },
        error: (err) => {
          console.log('err', err);
        }
      })
    }
  render(){
  		return (
        <div>
<div className="jumbotron">
  <div className="container text-center">
    <h1><b> Event Name : {this.state.eventName}</b></h1>      
  </div>
</div>
<div className="container-fluid bg-3 text-center" id="div">    
  <h3 className="fa-2x"><b>Description : </b></h3>
  <p className="lead" className="fa-2x">{this.state.description} .</p>
  <br></br>
  <br></br>
  <div className="row">
    <div className="col-sm-3">
      <p className="fa-2x" ><b> Place :</b></p>
      <p className="lead" className="fa-2x">{this.state.place} .</p>
    </div>
    <div className="col-sm-3"> 
      <p className="fa-2x"><b> StartDate :</b> </p>
      <p className="lead" className="fa-2x">{this.state.startDate} .</p>
    </div>
    <div className="col-sm-3"> 
      <p className="fa-2x"><b> Cost :</b></p>
      <p className="lead" className="fa-2x">{this.state.cost} .</p>
    </div>
    <div className="col-sm-3">
      <p className="fa-2x"><b> Duration :</b></p>
      <p className="lead" className="fa-2x">{this.state.duration} .</p>
    </div>
  </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
    <Link to='/Profile'><button className='col-xs-4 btn btn-primary btn-md col-xs-offset-4 ' type='Submit'
 onClick={this.add}>Attend</button></Link>
  
            </div>

       )
  }
}


export default EventInfo;
