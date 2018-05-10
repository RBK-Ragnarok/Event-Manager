import React,{Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
//import axios from 'axios';
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from "react-router-dom";
import $ from 'jquery';
import Home from './Home.jsx';


class login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {states:{
			userName: '',
			password: '',
			email: ''
		},
		data: ''
		}
		this.onChange = this.onChange.bind(this);
		this.Login = this.Login.bind(this);
	}

	onChange(e) {
		var states = this.state.states;
		var name = e.target.name;
		var value = e.target.value;
		states[name] = value;
		this.setState({states:states});
	};

	Login() {
	   $.ajax({
	   url: '/login',
	   type: 'POST',
	   data: this.state,
	   success: (data) => {
	    
	    this.setState({data:data})
	   
	    if(data===""){
	     alert("incorrect password")
	   }
	   
	 }
	});
	}

render() {
	if(this.state.data!==""){
    return (
      <Router>
      
      <Route path="/Home" component={Home}/>}/>
      
      </Router>
      )
  }
	return (
		<div id='loginpage' className="container">
        	<div className="wrapper">

		 		<form className="form-signin">
            	<h3 className="form-signin-heading">
                <b id='b'>Login</b>
            	</h3>
		           	<FormControl id='loguser' type="text" className="form-control" name="userName" onChange={this.onChange} placeholder="Username" required autoFocus value={this.state.userName} /><br />
		            <FormControl id='logpass' type="password" className="form-control" name="password" onChange={this.onChange} placeholder="Password" required value={this.state.password}/><br />
		            <FormControl id='logemail' type="email" className="form-control" name="email" onChange={this.onChange} placeholder="email" required value={this.state.email}/><br />
		            <Router>
		           <Link to="/Home" onClick={this.Login}> <button id="logb" className="btn btn-lg btn-primary" type="Submit">Login</button></Link>
		            </Router>
        		</form>
    		</div>
    		<div >
			<a href="/Home">Home &rarr;</a>
		</div>

		</div>
		

		);
	}
}

export default login;