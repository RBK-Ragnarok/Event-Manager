import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import login from '../components/login.jsx';
import Home from '../components/Home.jsx';
import Signup from '../components/Signup.jsx';
import axios from 'axios';
//import NavBarComponent from '../components/NavBarComponent.jsx';

class AppRouter extends React.Component {
  constructor(props) {
      super(props);
      this.state = { 
        session: false
      }
     
    }
  
   componentDidMount() {
     var that=this;
  axios.get('/logged')
    .then(response => {
      const posts = response.data;
      // console.log(response);
      that.setState({session:posts});
       
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  
      render() {

        return (
        <BrowserRouter>
            <div id="navbar">
                
                <Switch>
                <Route  exact path = "/"  component = {Home}/>	
                <Route  path = "/signup" component = {Signup} />
                <Route  path = "/login"	component = {login} />	
    
    
    
                </Switch>
            </div>
        </BrowserRouter>
    
        )
    }
    }
    export default AppRouter;    