
import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import login from '../components/login.jsx';
import Profile from '../components/Profile.jsx';
import Home from '../components/Home.jsx';
import Signup from '../components/Signup.jsx';
import Events from '../components/Events.jsx';
import axios from 'axios';
import NavBarComponent from '../components/NavBarComponent.jsx';
import CreateEvent from '../components/CreateEvent.jsx';
import EventEnfo from '../components/EventEnfo.jsx';
import $ from 'jquery'

class AppRouter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: false
    }
  }

  componentDidMount () {
    var that = this

	   $.ajax({
	   url: '/logged',
	   type: 'GET',
	   success: (data) => {
       console.log('getting this data : ',data.user);
      if(data.user){
        that.setState({loggedIn:true})
      }else{
        that.setState({loggedIn:false})
      }
      console.log('logged in state : ',that.state.loggedIn);

	 }
    })
  }
      render() {

        return (
        <BrowserRouter>
            <div id="navbar">
            <NavBarComponent  loggedIn={this.state.loggedIn}/><br /><br />
                <Switch>
                <Route  exact path = "/"  component = {Home}/>
                <Route  path = "/signup" component = {Signup} />
                <Route  path = "/login"	component = {login} />
                <Route  path = "/events" component = {Events} />
                <Route  path = "/create" component = {CreateEvent} />
                <Route  path = "/EventEnfo" component = {EventEnfo} />
                <Route  path = "/profile" component = {Profile} />

                </Switch>
            </div>
        </BrowserRouter>

    )
  }
}
export default AppRouter
