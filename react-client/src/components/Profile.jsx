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
	    username:'',
	    email:'',
	    age:'',
	    gender:'',
	    about:'',
	    editing:false
    	}
 
	    this.edit=this.edit.bind(this);
	    this.save=this.save.bind(this);
	    this.handelChange2=this.handelChange2.bind(this);
	    this.handelChange3=this.handelChange3.bind(this);
	    this.handelChange4=this.handelChange4.bind(this);
	    this.handelChange5=this.handelChange5.bind(this);
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
	    this.state.data.about=this.state.about;
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
  	handelChange5(e){
    	this.setState({
      		about:e.target.value
    	})
  	}

  

  	renderStart(){
  		const divStyle = {
  			margin: '40px',
  			border: '5px solid black'
  		};
  		if(this.state.data.events === undefined){
  			return (<h1>test</h1>)
  		}
  		console.log('aaaaaaaa',this.state.data)	
  		var arr = []
  		this.state.data.events.forEach(function(elem){
  			console.log(elem);
  			arr.push(<li>{elem.eventName}</li>)
  		})
 		return (
		 	<div className='container' style={divStyle}>
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

		 	 		<Col md={2}>
		 	 			<span id="textcolor" >Age: <p className="fa-1x"> {this.state.data.age}</p></span>
 		 	 		</Col>

 		 	 		<Col md={2}>
		 	 			<Button bsStyle="success" onClick={this.edit}>Edit</Button> 
		 	 		</Col>	
		 	 	</Row>  
		 	 	
		 	 	<Col md={2}>
		 	 		<span id="textcolor" >Events:</span>
		 	 		<ul>
		 	 		{arr}
		 	 		</ul>
 		 	 	</Col> 		
            </div>
 		)

  	}	

  	// {	if (this.state.data.events){this.state.data.events.map(event =>{
   //      	return <p key={event._id} event={event} />
   //     		})

   //      }
   //  }

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
		          	<FormControl
		            bsSize="large"
		            value={this.state.gender}
		            placeholder="Gender"
		            onChange={this.handelChange4}
		          	/>
		          	<hr></hr>
		          	<FormControl
		            bsSize="large"
		            value={this.state.about}
		            placeholder="About"
		            onChange={this.handelChange5}
		         	/>
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