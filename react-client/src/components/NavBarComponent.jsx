import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,NavItem,Carousel} from 'react-bootstrap';

class NavBarComponent extends React.Component {
    render(){
        if(this.props.session){
    		return(
                <Navbar classNmae="devNav">
                <Navbar.Header>
                <Navbar.Brand >
                   <a className='header'href="/"><strong>Events</strong></a>
                </Navbar.Brand>
              </Navbar.Header>
                <Nav pullRight className='nav'>
                <NavItem id="nav1" eventKey='logIn' href= "/login"><p>profile</p></NavItem>
                <NavItem id="nav1" eventKey='signUp' href= "/signup"><p>logout</p></NavItem>
                <NavItem id="nav1" eventKey='signUp' href= "/signup"><p>events</p></NavItem>
                </Nav>
                </Navbar>
            )
         } else {
        return(
            <Navbar classNmae="devNav">
            <Navbar.Header>
            <Navbar.Brand >
               <a className='header'href="/"><strong>Events</strong></a>
            </Navbar.Brand>
          </Navbar.Header>
            <Nav pullRight className='nav'>
            <NavItem id="nav1" eventKey='logIn' href= "/login"><p>LOGIN</p></NavItem>
            <NavItem id="nav1" eventKey='signUp' href= "/signup"><p>SIGNUP</p></NavItem>
            </Nav>
            </Navbar>
	);
    	}
    }
 }

export default NavBarComponent;
