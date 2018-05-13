import React from 'react';
import ReactDom from 'react-dom';
import { Button, FormGroup, FormControl, ControlLabel,Col, Row,ButtonToolbar } from 'react-bootstrap';
import {  Route,Link,Switch,browserHistory,BrowserRouter as Router} from "react-router-dom";
import $ from 'jquery';
import Home from './Home.jsx';

class CreateEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {states:{
        category: '',
        EventTitle: '',
        cost: '',
        description:'',
        from: '',
        to: ''},
        dateFrom: '',
        dateTo: ''
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        var states = this.state.states;
        var name = e.target.name;
        var value = e.target.value;
        states[name] = value;
        this.setState({states:states});  
    };
    render() {
        return (
          <div>
          <div>
             <h3 className="form-Signup-heading">
                    <b>create your event:</b>
                  </h3>
            </div>
          <br/>
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
           <select name = "category" className="form-control selectpicker btn btn-default">
             <option value="Select">Select Category</option>
             <option value="Driver">Wedding</option>
             <option value="Home Maintenance">Birthdays</option>
             <option value="Computer Maintenance">bla bla</option>
             <option value="Babysitting">bla bla</option>
             <option value="Tutoring">bla bla</option>
           </select>
           </div>
         </label></Col>
         </Row>
         <br />
         <Row>
         <Col md={1}>
         </Col>
         <Col md={2}>
         <span id="textcolor">Event title</span>
         </Col>
         <Col md={3}>
         <label >
         <FormControl maxLength={20} type="text" name="eventTitle" placeholder = "event title" autoFocus required  />
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
         <FormControl maxLength={20} type="text" name="cost" placeholder = "Cost" autoFocus required  />
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
         <FormControl id="txtArea" componentClass="textarea"  maxLength={150} name="description" placeholder = "Description" autoFocus required  />
         </label></Col>
        
         <Col md={1}>
         </Col> 
         </Row><br />
    
         <Row>
         <Col md={1} id="textcolor">
         Time :
         </Col> 
         <Col md={2}>
         <span id="textcolor">From</span>
         </Col>
         <Col md={3}>
         <label >
         <FormControl type = "time" name = "from" placeholder = "From" autoFocus required  />
         </label> </Col>
         <Col md={2}>
         <span id="textcolor">To</span>
         </Col>
         <Col md={2}>
         <label >
         <FormControl type = "time" name = "to" placeholder = "To" autoFocus required  />
         </label></Col>
         <Col md={1}>
         </Col>
         </Row><br /><br />
         <Row>
         <Col md={1} id="textcolor">
         Date :
         </Col>
         <Col md={2}>
         <span id="textcolor">From</span>
         </Col>
         <Col md={3}>
         <label >
         <FormControl type = "date" name = "dateFrom" placeholder = "Date" autoFocus required  />
         </label> </Col>
         <Col md={2}>
         <span id="textcolor">To</span>
         </Col>
         <Col md={2}>
         <label >
         <FormControl type = "date" name = "dateTo" placeholder = "Date" autoFocus required  />
         </label></Col>
         <Col md={1}>
         </Col>
    
         </Row><br />
             <Button id="jobb" className="col-xs-4 col-xs-offset-4" type="submit" bsSize="large" >
                Create Event
             </Button>
         </form>
         </div> 
    
        </div>
        );
        }
      }
    
    
    export default CreateEvent;    