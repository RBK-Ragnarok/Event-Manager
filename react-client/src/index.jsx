import React from 'react';
import ReactDom from 'react-dom';
import $ from'jquery';
import Signup from './components/Signup.jsx';
import {BrowserRouter as Router, Route, Link}
 from 'react-router-dom';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      arr[]
    } 
  }

  componentDidMount(){
    var that=this;
    $.ajax({
      url:'login',
      method:'POSt',
      data:obj
    })
    .done (function(data){
      alert('Login Successful');
      that.setState({
        user: data
      })
    })
    .fail(function(jqXHR, textStatus){
      alert( "Wrong Login information, please check your username & password ");
    })
  }

  render(){
    return (
      
    )
  }
} 