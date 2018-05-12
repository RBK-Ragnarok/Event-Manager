import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,NavItem,Carousel} from 'react-bootstrap';

class NavBarComponent extends React.Component {
    render(){
        return(
            <Navbar classNmae="devNav">
            <Navbar.Header>
            <Navbar.Brand >
               <a className='header'href="#home"><strong>Events</strong></a>
            </Navbar.Brand>
          </Navbar.Header>           
            <Nav pullRight className='nav'>
            <NavItem eventKey='logIn' href= "/login"><p>logIn</p></NavItem>
            <NavItem eventKey='signUp' href= "/signup"><p>signUp</p></NavItem>
            </Nav>
            </Navbar>
	);
    	}
        
 }

export default NavBarComponent;
 