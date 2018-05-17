import React from 'react';
<<<<<<< 84f34ecd46f1f72f0e633137cf9f147e368e66d3
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,NavItem,Carousel} from 'react-bootstrap';
import $ from 'jquery'

=======
import {Navbar,Nav,NavItem} from 'react-bootstrap';
>>>>>>> added about page

class NavBarComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state={
      loggedIn:false
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
    render(){
<<<<<<< 84f34ecd46f1f72f0e633137cf9f147e368e66d3
          if(this.state.loggedIn){
            return(

            <Navbar className="devNav">
              <Navbar.Header>
=======
      if(this.props.session) {
    		return(
                <Navbar className="devNav">
                <Navbar.Header>
>>>>>>> added about page
                <Navbar.Brand >
                  <a className='header'href="/"><strong>Events</strong></a>
                </Navbar.Brand>
              </Navbar.Header>
<<<<<<< 84f34ecd46f1f72f0e633137cf9f147e368e66d3
              <Nav pullRight className='nav'>
                <NavItem id="nav1" eventKey='logIn' href= "/profile"><p>profile</p></NavItem>
                <NavItem id="nav1" eventKey='logIn' href= "/create"><p>Create Event</p></NavItem>
                <NavItem id="nav1" eventKey='signUp' href= "/logout"><p>logout</p></NavItem>
                <NavItem id="nav1" eventKey='signUp' href= "/events"><p>events</p></NavItem>

              </Nav>
            </Navbar>)
          }else{
            return(
            <Navbar className="devNav">
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
=======
                <Nav pullRight className='nav'>
                  <NavItem id="nav1" eventKey='profile' href= "/profile"><p>profile</p></NavItem>
                <NavItem id="nav1" eventKey='create' href= "/create"><p>Create Event</p></NavItem>
                <NavItem id="nav1" eventKey='events' href= "/events"><p>events</p></NavItem>
                  <NavItem id="nav1" eventKey='login' href= "/login"><p>LOGIN</p></NavItem>
                  <NavItem id="nav1" eventKey='signUp' href= "/signup"><p>SIGNUP</p></NavItem>
                  <NavItem id="nav1" eventKey='logout' href= "/logout"><p>logout</p></NavItem>
                </Nav>
                </Navbar>
            )
          } else {
            return(
              <Navbar className="devNav">
              <Navbar.Header>
              <Navbar.Brand >
                 <a className='header'href="/"><strong>Events</strong></a>
              </Navbar.Brand>
            </Navbar.Header>
              <Nav pullRight className='nav'>
              <NavItem id="nav1" eventKey='login' href= "/login"><p>LOGIN</p></NavItem>
              <NavItem id="nav1" eventKey='signUp' href= "/signup"><p>SIGNUP</p></NavItem>
              <NavItem id="nav1" eventKey='about' href= "/about"><p>About</p></NavItem>

              </Nav>
              </Navbar>
>>>>>>> added about page
          )
          }
    }
 }

export default NavBarComponent;
