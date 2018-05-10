import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from "react-router-dom";
import $ from 'jquery';
import login from './login.jsx';

class Signup extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username:"",
      password:"",
      email:"",
      data:''
  }
  this.onChange = this.onChange.bind(this);
  this.Signup = this.Signup.bind(this);
}

onChange (e) {
 var state = this.state;
 var name = e.target.name;
 var value = e.target.value;
 state[name] = value;
 this.setState({state});
}

Signup() {

 $.ajax({
   url: '/signup',
   type: 'POST',
   data: this.state,
   success: (data) => {

    this.setState({data:data})

    if(data===""){
     alert("Try another one")
   }

 }
});
}

  render() {
    if(this.state.data!==""){
      return (
        <Router>

        <Route path="/login" component={login}/>

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
                <FormControl id='signuser' type="text" className="form-control" name="userName" onChange={this.onChange} placeholder="Username" required autoFocus value={this.state.userName}/><br />
                <FormControl id='signpass' type="password" className="form-control" name="password" onChange={this.onChange} placeholder="Password" required value={this.state.password}/><br />
                <FormControl id='signemail' type="email" className="form-control" name="email" onChange={this.onChange} placeholder="email" required value={this.state.email}/><br />
                 <Router>
                <Link to="/login"><button id="signb" className="btn btn-lg btn-primary" type="Submit" onClick={this.Signup}>Signup</button></Link>
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
