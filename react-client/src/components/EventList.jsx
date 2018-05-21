import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import {Navbar, Nav, NavItem, Carousel, Modal} from 'react-bootstrap'
// import { Link } from 'react-router-dom';
import Events from './Events.jsx'
import EventItem from './EventItem.jsx'
import Eventinfo from './EventInfo.jsx'
//import SearchCom from './SearchCom.jsx'

import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from 'react-router-dom'

class EventList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: [],
      search:''
    }
  }
  updateSearch(e){
    this.setState({search:e.target.value});
 }

  render () {
   var arr = [].concat.apply([], this.props.events);
   var filterd=arr.filter(
     (event)=>{ 
   console.log('i am hear',arr)
     return event.eventName.toLowerCase().indexOf(this.state.search.
      toLowerCase())!==-1;
    }
   )
    return (
      <div>
    <form>
      <input id="inp" type='text' className="col-xs-offset-7 col-xs-4" placeholder="Search"
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
            />
    </form>
      
    {filterd.map(event =>{
        return <EventItem event={event} />
       })
            
        }
      </div>

    )
  }
}

export default EventList
