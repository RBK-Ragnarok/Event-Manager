import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import {Route, Link, Switch, browserHistory, BrowserRouter as Router} from "react-router-dom";
import $ from 'jquery';
  
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     username:'',
     email:''
    }

  }

  componenetDidMount(){
  	var that= this;

 $.ajax({
	   url: '/user',
	   type: 'GET',
	   success: (data) => {
        that.setState({data})
	 }
    })
  	
  }	



  render() {  
		 return (
		 	 <div className='container'>
		 	 	<h1>Profile Page</h1>
		 	 	<br/>
		 	 	<br/>
		 	 		<div className='row'>
		 	 		    <div className="col-md-3" style={{'paddingLeft':'20px'}}>

		 	 		    
		 	 		    </div>
		 	 		</div>
             </div>
		 	)
  }
}
  
export default Profile;