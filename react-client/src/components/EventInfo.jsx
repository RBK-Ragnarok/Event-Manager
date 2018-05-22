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
  <div class="jumbotron jumbotron-fluid" id="jam1">
  <div class="container">
    <h1 class="display-4"><b> Event Name : {this.state.eventName}</b></h1>
    <p class="lead"></p>
  </div>
</div>
  <div className="card" id="imginfo" id="center">
  <img  id='im' className="card-img-top"
   src="https://images.pexels.com/photos/415068/pexels-photo-415068.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
  alt="Card image"/>
  <br></br>
  <div className="card-body">
   <h1 class="display-4"><b>Description : </b></h1>
  <p class="lead">{this.state.description} .</p>
  </div>
</div>
<div className="card" id="center">
  <img  id='im' className="card-img-top" 
  src="https://images.pexels.com/photos/52526/sign-places-travel-information-52526.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
  alt="Card image"/>
  <br></br>
  <div className="card-body">
    <h1 class="display-4"><b> Place :</b> </h1>
    <p class="lead">{this.state.place} .</p>
  </div>
</div>
<div className="card" id="center">
  <img  id='im' className="card-img-top" 
  src="https://images.pexels.com/photos/167587/pexels-photo-167587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
  alt="Card image"/>
  <br></br>
  <div className="card-body">
    <h1 class="display-4"><b> EventType :</b>  </h1>
    <p class="lead">{this.state.eventType} .</p>
  </div>
</div>
<div className="card" id="center">
  <img  id='im' className="card-img-top" 
  src="https://images.pexels.com/photos/1020323/pexels-photo-1020323.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" 
  alt="Card image"/>
  <br></br>
  <div className="card-body">
    <h1 class="display-4"><b> StartDate :</b> </h1>
    <p class="lead">{this.state.startDate} .</p>
  </div>
</div>
<div className="card" id="center">
  <img  id='im' className="card-img-top" 
  src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1442096675000/photosp/14ec9380-b0c9-427a-bf0b-04c3b7a366b7/stock-photo-money-currency-paper-coins-savings-cost-expense-cash-postit-14ec9380-b0c9-427a-bf0b-04c3b7a366b7.jpg" 
  alt="Card image"/>
  <br></br>
  <div className="card-body">
    <h1 class="display-4"><b> Cost :</b> </h1>
    <p class="lead">{this.state.cost} .</p>
  </div>
</div>
    <Link to='/Profile'><button className='col-xs-4 btn btn-primary btn-md col-xs-offset-4 ' type='Submit'
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
