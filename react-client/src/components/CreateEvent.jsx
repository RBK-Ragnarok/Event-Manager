import React from 'react';
import ReactDom from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel,Col, Row,ButtonToolbar,Navbar,Nav,NavItem } from 'react-bootstrap';
import {  Route,Link,Switch,browserHistory,BrowserRouter as Router} from "react-router-dom";
import $ from 'jquery';
import Home from './Home.jsx';

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          eventName: '',
          duration: '',
          startDate: '',
          place:'',
          eventType: '',
          cost: '',
          description: '',
          message:''
        }
        this.onChange = this.onChange.bind(this);
        this.create = this.create.bind(this);
    }
    onChange(e) {
        var name = e.target.name;
        var value = e.target.value;
        this.setState({[name]:value});
    }

    create() {
      var that = this

      $.ajax({
        url: '/event',
        type: 'POST',
        data: this.state,
        success: (data) => {
          console.log('event added')
          that.setState({message:'Event Adeed'})
        },
        error: (err) => {
          console.log('err', err);
        }
      })
    }

    render() {
        return (
          <div>
            {/* <Navbar className="devNav">
                <Navbar.Header>
                <Navbar.Brand >
                   <a className='header'href="/"><strong>Events</strong></a>
                </Navbar.Brand>
              </Navbar.Header>
                <Nav pullRight className='nav'>
                  <NavItem id="nav1" eventKey='profile' href= "/profile"><p>profile</p></NavItem>
                <NavItem id="nav1" eventKey='create' href= "/create"><p>Create Event</p></NavItem>
                <NavItem id="nav1" eventKey='events' href= "/events"><p>events</p></NavItem>
                  <NavItem id="nav1" eventKey='logout' href= "/logout"><p>logout</p></NavItem>
                </Nav>
                </Navbar> */}
          <div>
             <h3 className="form-Signup-heading">
                    <b>create your event</b>
              </h3>
            </div>
          <br/>
          <Row>
         <Col md={1}>
         </Col>
         <Col md={3}>
          <p>you can create your event here.</p>
          </Col>
          </Row>
         <div  className="container wrapper well"><br />
         <form >

         <Row>
         <Col md={1}>
         </Col>
         <Col md={2}>
         <span id="textcolor">Category</span>
         </Col>
         <Col md={3}>
         <label>
         <div className="form-group">
           <select name = "eventType" className="form-control selectpicker btn btn-default" onChange = {this.onChange}>
             <option value="Select">Select Category</option>
             <option value="Sports">Sports</option>
             <option value="Social">Social</option>
             <option value="Political">Political</option>
             <option value="Educaional">Educaional</option>
             <option value="Art">Art</option>
           </select>
           </div>
         </label></Col>
         </Row>
         <br />
         <Row>
         <Col md={1}>
         </Col>
         <Col md={2}>
         <span id="textcolor">Event Name</span>
         </Col>
         <Col md={3}>
         <label >
         <FormControl maxLength={20} type="text" name="eventName" onChange = {this.onChange} placeholder = "event Name" autoFocus required value={this.state.eventName}/>
         </label>
         </Col>
         </Row>
         <br />

         <Row>
         <Col md={1}>
         </Col>
         <Col md={2}>
         <span id="textcolor">Place</span>
         </Col>
         <Col md={3}>
         <label >
         <FormControl maxLength={20} type="text" name="place" onChange = {this.onChange} placeholder = "Place" autoFocus required value={this.state.place} />
         </label>
         </Col>
        </Row>
         <br />

         <Row>
         <Col md={1}>
         </Col>
         <Col md={2}>
         <span id="textcolor">Cost</span>
         </Col>
         <Col md={3}>
         <label >
         <FormControl maxLength={20} type="text" name="cost" onChange = {this.onChange} placeholder = "Cost" autoFocus required value={this.state.cost}/>
         </label>
         </Col>
        </Row>
         <br />

         <Row>
         <Col md={1}>
         </Col>
         <Col md={2}>
         <span id="textcolor">Description</span>
         </Col>
         <Col md={8}>
         <label >
         <FormControl id="txtArea" componentClass="textarea"  maxLength={150} name="description" onChange = {this.onChange} placeholder = "Description" autoFocus required value={this.state.description}/>
         </label>
         </Col>
         <Col md={1}>
         </Col>
         </Row><br />

         <Row>
         <Col md={1}>
         </Col>
         <Col md={2}>
         <span id="textcolor">From</span>
         </Col>
         <Col md={3}>
         <label >
         <FormControl type = "date" name = "startDate" onChange = {this.onChange} placeholder = "Start Date" autoFocus required value={this.state.startDate}/>
         </label>
         </Col>
         <Col md={1}>
         </Col>
         </Row><br /><br />
         <Row>
         <Col md={1} id="textcolor">
         </Col>
         <Col md={2}>
         <span id="textcolor">Duration by days:</span>
         </Col>
         <Col md={3}>
         <label >
         <FormControl type = "number" name = "duration" onChange = {this.onChange} placeholder = "duration" autoFocus required value={this.state.duration}/>
         </label> </Col>
         </Row><br />
             <Button id="jobb" bsStyle="primary" className="col-xs-4 col-xs-offset-4" onClick={this.create} type="submit" bsSize="large" >
                Create Event
             </Button>
             <h3 className="SuccessMessage">{this.state.message}</h3>
         </form>
         </div>

        </div>
        );
        }
      }


    export default CreateEvent;
