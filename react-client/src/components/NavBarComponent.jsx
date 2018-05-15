import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,NavItem,Carousel} from 'react-bootstrap';

class NavBarComponent extends React.Component {
    render(){
    		return(
                <Navbar className="devNav">
                <Navbar.Header>
                <Navbar.Brand >
                   <a className='header'href="/"><strong>Events</strong></a>
                </Navbar.Brand>
              </Navbar.Header>
                <Nav pullRight className='nav'>
                  <NavItem id="nav1" eventKey='logIn' href= "/profile"><p>profile</p></NavItem>
                <NavItem id="nav1" eventKey='logIn' href= "/create"><p>Create Event</p></NavItem>
                <NavItem id="nav1" eventKey='signUp' href= "/logout"><p>logout</p></NavItem>
                <NavItem id="nav1" eventKey='signUp' href= "/events"><p>events</p></NavItem>
                  <NavItem id="nav1" eventKey='logIn' href= "/login"><p>LOGIN</p></NavItem>
                  <NavItem id="nav1" eventKey='signUp' href= "/signup"><p>SIGNUP</p></NavItem>
                </Nav>
                </Navbar>
            )
    }
 }

export default NavBarComponent;
