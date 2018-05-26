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
  		const divStyle = {
  			margin: '40px',
  			border: '5px solid black'
  		};

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
		 	<div className='container'>
 		 	 	<h1>Profile Page</h1>
 		 	 	<br />
 		 	 	<br />
		 	 	<Row>
		 	 		<Col md={1}>
		 	 		</Col>

		 	 		<Col md={2}>
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
		 	 	</Row>  
		 	 	<br />
		 	 	<Col md={4}>
		 	 		</Col>
		 	 	<Col md={2}>
		 	 		<span id="textcolor" >Attended Events:</span>
		 	 		<ul>
		 	 		{arr}
		 	 		</ul>
 		 	 	</Col> 
 		 	 	<Col md={2}>
 		 	 		<span id="textcolor" >Created Events:</span>
 		 	 		<ul>
 		 	 		{rra}
		 	 		</ul>
 		 	 	</Col>		
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

