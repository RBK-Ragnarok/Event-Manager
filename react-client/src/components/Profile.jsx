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
	    sata:{},
	    email:'',
	    age:'',
	    gender:'',
	    editing:false
    	}
 
	    this.edit=this.edit.bind(this);
	    this.save=this.save.bind(this);
	    this.handelChange2=this.handelChange2.bind(this);
	    this.handelChange3=this.handelChange3.bind(this);
	    this.handelChange4=this.handelChange4.bind(this);
	    this.renderStart=this.renderStart.bind(this);
	    this.renderedit=this.renderedit.bind(this);
    }
 
	componentDidMount(){
  		var that= this;
 		$.ajax({
	   		url: '/user',
	   		type: 'GET',
	   		success: (data) => {
        		that.setState({data:data})
        		console.log('bbbbbbbbbbbbbbbbbbb',data)
	 		}
    	})

    	$.ajax({
	   		url: '/allevents',
	   		type: 'GET',
	   		success: (sata) => {
        		that.setState({sata:sata})
        		console.log('dddddddddddddddddd',sata)
	 		}
    	})
  	}	
 
	edit(){
		this.setState({
	    editing:true
	    })
	}
	save(){
	   	var that=this
	    this.state.data.email=this.state.email;
	    this.state.data.age=this.state.age;
	    this.state.data.gender=this.state.gender;
	    var user=this.state.data.username;
	    $.ajax({
	      url: '/profile',
	      type: 'PUT',    
	      data: this.state,
		  	success: function(result) {
	          alert("Updated");
	      	}
	    })
	}
   
  	handelChange2(e){
    	this.setState({
      		email:e.target.value
    	})
  	}
  	handelChange3(e){
    	this.setState({
      		age:e.target.value
    	})
  	}
  	handelChange4(e){
    	this.setState({
      		gender:e.target.value
    	})
  	}

  

  	renderStart(){
  		

  		if(this.state.data.events === undefined){
  			return (<h1>Error Loading</h1>)
  		}

  		var arr = [];
  		var use=this.state.data.username
  		this.state.data.events.forEach(function(elem){
  			arr.push(<li>{elem.eventName}</li>)

  		})

  		if(this.state.sata === undefined){
  			return (<h1>Error Loading 2</h1>)
  		}

  		var rra = [];
  		this.state.sata.forEach(function(element){
  				if(element.creator === use){
  					rra.push(<li>{element.eventName}</li>)
  				}
  		})
  		
 		return (
			<div>
			<div>
				 <div id="dev">
 		 	<Row>
				<Col md={1}>
		 		</Col>
				<Col md={4}>
				 <img id="image" src="data:image/jpeg;base64,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" />
				</Col>
				<Col md={2}>
				<br/>
				<h3 id="textcolor" ><p className="fa-1x"> {this.state.data.username}</p></h3>	
				<h4 id="textcolor" >Age: <p className="fa-1x"> {this.state.data.age}</p></h4>
				</Col>
				<Col md={2}>
				<br/>
				<br/>
				<h4 id="textcolor" >Gender: <p className="fa-1x"> {this.state.data.gender}</p></h4>
				<h4 id="textcolor" >Email: <p className="fa-1x"> {this.state.data.email}</p></h4>
				</Col>
				<Col md={2}>
				<br/>
				<br/>
				<Button bsStyle="success" onClick={this.edit}>Edit Profile</Button> 
				</Col>
			</Row>
 		 	 	</div>
				</div>
		 	 		{/* <Col md={2}>
		 	 		  	<span id="textcolor" >User Name: <p className="fa-1x"> {this.state.data.username}</p></span>	
 		 	 		</Col>

		 	 		<Col md={2}>
		 	 		   	<span id="textcolor" >Email: <p className="fa-1x"> {this.state.data.email}</p></span>
		 	 		</Col>

		 	 		<Col md={1}>
		 	 			<span id="textcolor" >Age: <p className="fa-1x"> {this.state.data.age}</p></span>
 		 	 		</Col>

 		 	 		<Col md={1}>
		 	 			<span id="textcolor" >Gender: <p className="fa-1x"> {this.state.data.gender}</p></span>
 		 	 		</Col>

 		 	 		<Col md={1}>
		 	 			<Button bsStyle="success" onClick={this.edit}>Edit</Button> 
		 	 		</Col>	
		 	  */}
		 	 	<br />
				  <div>
		 	 	<Col md={2}>
		 	 		</Col>
		 	 	<Col md={2}>
		 	 		<span id="textcolor" >Attended Events:</span>
		 	 		<ul>
		 	 		{arr}
		 	 		</ul>
 		 	 	</Col> 
				   <Col md={4}>
		 	 		</Col>
 		 	 	<Col md={2}>
 		 	 		<span id="textcolor" >Created Events:</span>
 		 	 		<ul>
 		 	 		{rra}
		 	 		</ul>
 		 	 	</Col>	
				   </div>	
            </div>
 		)

  	}	
  	
  	renderedit(){
	    var user = this.state.data;
	    //var imgUrl = user.imgUrl;

	    //<div className="col-md-3" style={{'paddingLeft':'20px'}}>
	    //      <img src={imgUrl}  width = '250px' className="img-thumbnail"/>
	    //    </div>
	    return(
	    	<div className="row">
	      		<div className="col-md-3" style={{'paddingLeft':'20px'}}>
	        	</div>
	        
	        	<div className='col-md-6'>
	       			<FormControl
		            bsSize="large"
		            value={this.state.email}
		            placeholder="Email"
		            onChange={this.handelChange2}
	          		/>
	          		<hr></hr>
	         		<FormControl
		            bsSize="large"
		            value={this.state.age}
		            placeholder="Age"
		            onChange={this.handelChange3}
		          	/>
		          	<hr></hr>
		          	
		          	<FormControl componentClass="select" placeholder="Gender" name="gender" onChange={this.handelChange4} required value={this.state.gender}>
                		<option hidden>Gender</option>
              		    <option value="female">Female</option>
               		    <option value="male">Male</option>
             		</FormControl>
		          	<hr></hr>
	          		<Button bsStyle="success" onClick={this.save}>Save</Button>
	        	</div>
			</div>
	    )
    }

	render() {
    	if(this.state.editing){
      		return(
        		this.renderedit()
      		)
    	}
    	else {
      		return(
        		this.renderStart ()
      		)
    	}
  	}
}
   
export default Profile;

