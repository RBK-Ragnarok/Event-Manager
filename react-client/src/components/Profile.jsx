import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col, Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import {Route, Link, Switch, browserHistory, BrowserRouter as Router} from "react-router-dom";
import $ from 'jquery';
  
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     data:{},
     sata:{}
    }

  }

  componentDidMount(){
  	var that= this;
 	$.ajax({
	   url: '/user',
	   type: 'GET',
	   success: (data) => {
        that.setState({data:data})
	 }
    })
  }	


  render() {  
		 return (
		 	 <div className='container'>
		 	 	<h1>Profile Page</h1>
		 	 	<br />
		 	 	<br />
		 	 		<Row>
		 	 		  <Col md={1}>
		 	 		  </Col>
		 	 		  <Col md={3}>
		 	 		  	<span id="textcolor" >User Name :</span>
		 	 		  	<p className="fa-1x"> {this.state.data.username}</p>
		 	 		  </Col>	
		 	 		  <Col md={3}>
		 	 		   	<span id="textcolor" >Email :</span>
		 	 		  	<p className="fa-1x"> {this.state.data.email}</p>
		 	 		  </Col>	 	 		
		 	 		</Row> 
             </div>
		 	)
  }
}
  
export default Profile;