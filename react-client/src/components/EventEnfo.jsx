import React, { Component } from "react";
import ReactDOM from 'react-dom';
import $ from 'jquery';
import AppRouter from '../routes/AppRouter.jsx';
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
      Date:'',
      Duration:'',
      description:''
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
  		<h1>lolo</h1>
  		</div>
  )
  }
}
export default EventEnfo;