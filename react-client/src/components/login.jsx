import React,{Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import axios from 'axios';


class login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {states:{
			userName: '',
			password: '',
			email: ''
		},
		message: ''
		}
		this.onChange = this.onChange.bind(this);
	}

	onChange(e) {
		var states = this.state.states;
		var name = e.target.name;
		var value = e.target.value;
		states[name] = value;
		this.setState({states:states});
	};

render() {
	return (
		<div id='loginpage' className="container">
        	<div className="wrapper">

		 		<form className="form-signin">
            	<h3 className="form-signin-heading">
                <b id='b'>Login</b>
            	</h3>
		           	<FormControl id='loguser' type="text" className="form-control" name="userName" onChange={this.onChange} placeholder="Username" required autoFocus /><br />
		            <FormControl id='logpass' type="password" className="form-control" name="password" onChange={this.onChange} placeholder="Password" required /><br />
		            <FormControl id='logemail' type="email" className="form-control" name="email" onChange={this.onChange} placeholder="email" required /><br />
		            <button id="logb" className="btn btn-lg btn-primary" type="Submit">Login</button>
        		</form>
    		</div>
    		<div >
			<a href="/signUp">signUp &rarr;</a>
		</div>

		</div>
		

		);
	}
}

export default login;