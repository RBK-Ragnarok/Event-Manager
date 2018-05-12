import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import {  Route,Link,Switch,browserHistory,BrowserRouter as Router} from "react-router-dom";
import $ from 'jquery';
import login from './login.jsx';
import Home from './Home.jsx';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      email:"",
      loggedIn:false
      }
  this.onChange = this.onChange.bind(this);
  this.Signup = this.Signup.bind(this);
}

onChange (e) {
 const name = e.target.name;
 const value = e.target.value;
 this.setState({
   [name]:value
 })
}

Signup() {
var that = this;
 $.ajax({
   url: '/signup',
   type: 'POST',
   data: this.state,
   success: (data) => {
     console.log('in ajax post :',data);
     if(data==='201'){
        that.setState({loggedIn:true})
        window.location.href = "/"
     }else{
       that.setState({loggedIn:false})
       window.location.href = "/login"
     }
  }
});
}

  render() {
    if(this.state.loggedIn==true){
      return (
        <Router>

        <Route path="/" component={Home}/>

        </Router>
        )
    }else{
    return (

    <div id='SignupPage' className="container">
          <div className="wrapper">

        <form className="form-Signup">
              <h3 className="form-Signup-heading">
                <b id='b'>Signup</b>
              </h3>
                <FormControl id='signuser' type="text" className="form-control" name="username" onChange={this.onChange} placeholder="Username" required autoFocus value={this.state.username}/><br />
                <FormControl id='signpass' type="password" className="form-control" name="password" onChange={this.onChange} placeholder="Password" required value={this.state.password}/><br />
                <FormControl id='signemail' type="email" className="form-control" name="email" onChange={this.onChange} placeholder="email" required value={this.state.email}/><br />
                 <Router>
                <Link to="/" ><button id="signb" className="btn btn-lg btn-primary" type="Submit" onClick={this.Signup}>Signup</button></Link>
                 </Router>
            </form>
        </div>
        <div >
      <a href="/login">login &rarr;</a>
    </div>
   </div>
    );
    }
  }
}

export default Signup;
