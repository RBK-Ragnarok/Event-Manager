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
    console.log("hello",this.props.match.params.id)
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
   console.log("lolololo",this.state)
      $.ajax({
        url: `/user/${this.props.match.params.id}`,
        type: 'PUT',
        data:this.state,
        success: (data) => {
          console.log('event added')
          that.setState({message:'Event Adeed'})
        },
        error: (err) => {
          console.log('err', err);
        }
      })
    }
  render(){
  		return (
        <div>
  <h1 className='col-xs-offset-3' ><b> Event Name : {this.state.eventName}</b></h1>
  <br></br>
  <ul>
  <li className="fa-2x"><p><b>Description : </b>{this.state.description} .</p></li>
  <br></br>
  <li className="fa-2x"><p><b> Duration :</b> {this.state.duration} .</p></li>
  <br></br>
  <li className="fa-2x"><p><b> Place :</b> {this.state.place} .</p></li>
  <br></br>
  <li className="fa-2x"><p><b> EventType :</b> {this.state.eventType} .</p></li>
  <br></br>
  <li className="fa-2x"><p><b> StartDate :</b> {this.state.startDate} .</p></li>
  <br></br>
  <li className="fa-2x"><p><b> Cost :</b> {this.state.cost} .</p></li>
  <p>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
    <Link to='/Profile'><button className='col-xs-4 btn btn-primary btn-md col-xs-offset-3 ' type='Submit'
 onClick={this.add}>Attend</button></Link>
  </p>
  </ul>
            </div>

       )
  }
}
export default EventInfo;
