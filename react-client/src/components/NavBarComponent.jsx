import React from 'react'
import {NavLink} from 'react-router-dom'
import {Navbar, Nav, NavItem, Carousel} from 'react-bootstrap'
import $ from 'jquery'

class NavBarComponent extends React.Component {
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
        console.log('getting this data : ', data.user)
        if (data.user) {
          that.setState({loggedIn: true})
        } else {
          that.setState({loggedIn: false})
        }
        console.log('logged in state : ', that.state.loggedIn)
	 }
    })
  }
  render () {
    if (this.state.loggedIn) {
      return (

        <Navbar className='navbar navbar-default' >
          <div className='container-fluid'>
            <Navbar.Header>
              <Navbar.Brand >
                <a className='header'href='/'><strong>Home</strong></a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav>
              <NavItem id='nav1' eventKey='profile' href='/profile'><p>Profile</p></NavItem>
              <NavItem id='nav1' eventKey='create' href='/create'><p>Create Event</p></NavItem>
              <NavItem id='nav1' eventKey='events' href='/events'><p>Events</p></NavItem>
            </Nav>
            <Nav pullRight className='nav'>
              <NavItem id='nav1' eventKey='logout' href='/logout'><p>Logout</p></NavItem>
              <NavItem id='nav1' eventKey='about' href='/about'><p>About Us</p></NavItem>
            </Nav>
          </div>
        </Navbar>)
    } else {
      return (
        <Navbar className='navbar navbar-default' >
          <div className='container-fluid'>
            <Navbar.Header>
              <Navbar.Brand >
                <a className='header'href='/'><strong>Home</strong></a>
              </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight className='nav'>

              <NavItem id='nav1' eventKey='logIn' href='/login'><p>LOGIN</p></NavItem>
              <NavItem id='nav1' eventKey='signUp' href='/signup'><p>SIGNUP</p></NavItem>
              <NavItem id='nav1' eventKey='about' href='/about'><p>About Us</p></NavItem>
            </Nav>
          </div>
        </Navbar>
      )
    }
  }
}

export default NavBarComponent
