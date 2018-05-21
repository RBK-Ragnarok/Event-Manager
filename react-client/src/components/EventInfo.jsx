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
   console.log("lolololo",this.props.match.params.id)
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
          <div class="jumbotron" id="jum">
    <h1> The Full Info </h1>      
  </div>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4"><b> Event Name : {this.state.eventName}</b></h1>
    <p class="lead"></p>
  </div>
</div>
<div id="jam1"class="jumbotron jumbotron-fluid" className='col-xs-4 btn btbtn-md col-xs-offset-3'>
  <div class="container">
    <h1 class="display-4"><b>Description : </b></h1>
    <p class="lead">{this.state.description} .</p>
  </div>
</div>
<div id="jam1" class="jumbotron jumbotron-fluid" className='col-xs-4 btn btbtn-md col-xs-offset-3 '>
  <div class="container">
    <h1 class="display-4"><b> Place :</b> </h1>
    <p class="lead">{this.state.place} .</p>
  </div>
</div>
<div id="jam1" class="jumbotron jumbotron-fluid" className='col-xs-4 btn btbtn-md col-xs-offset-3 '>
  <div class="container">
    <h1 class="display-4"><b> EventType :</b>  </h1>
    <p class="lead">{this.state.eventType} .</p>
  </div>
</div>
<div id="jam1" class="jumbotron jumbotron-fluid" className='col-xs-4 btn btbtn-md col-xs-offset-3 '>
  <div class="container">
    <h1 class="display-4"><b> StartDate :</b> </h1>
    <p class="lead">{this.state.startDate} .</p>
  </div>
</div>
<div id="jam1" class="jumbotron jumbotron-fluid" className='col-xs-4 btn btbtn-md col-xs-offset-3 '>
  <div class="container">
    <h1 class="display-4"><b> Cost :</b> </h1>
    <p class="lead">{this.state.cost} .</p>
  </div>
</div>

    <Link to='/Profile'><button className='col-xs-4 btn btn-primary btn-md col-xs-offset-3 ' type='Submit'
 onClick={this.add}>Attend</button></Link>
  
            </div>

       )
  }
}
// <h1 className='col-xs-offset-3' ><b> Event Name : {this.state.eventName}</b></h1>
//   <br></br>
//   <ul>
//   <p className="fa-2x"><b>Description : </b>{this.state.description} .</p>
//   <br></br>
//   <p className="fa-2x"><b> Duration :</b> {this.state.duration} .</p>
//   <br></br>
//   <p className="fa-2x"><b> Place :</b> {this.state.place} .</p>
//   <br></br>
//   <p className="fa-2x"><b> EventType :</b> {this.state.eventType} .</p>
//   <br></br>
//   <p className="fa-2x"><b> StartDate :</b> {this.state.startDate} .</p>
//   <br></br>
//   <p className="fa-2x"><b> Cost :</b> {this.state.cost} .</p>
//   <p>
//   <br></br>
//   <br></br>
//   <br></br>
//   <br></br>
//</p>
//  </ul>


export default EventInfo;
