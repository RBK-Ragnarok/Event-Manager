import React from 'react'
import ReactDom from 'react-dom'
import { Button, FormGroup, FormControl, ControlLabel, Col, Row, ButtonToolbar } from 'react-bootstrap'
import { Route, Link, Switch, browserHistory, BrowserRouter as Router} from 'react-router-dom'
import $ from 'jquery'
import Home from './Home.jsx'
import Map from './Map.jsx'
import Profile from './Profile.jsx'

class CreateEvent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      creator: '',
      eventName: '',
      duration: '',
      startDate: '',
      place: '',
      eventType: '',
      cost: '',
      description: '',
      message: ''

    }
    this.onChange = this.onChange.bind(this)
    this.create = this.create.bind(this)
  }
  onChange (e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({[name]: value})
  }

  create () {
    var that = this

    $.ajax({
      url: '/event',
      type: 'POST',
      data: this.state,
      success: (data) => {
        console.log('event added')
        that.setState({message: 'Event Adeed'})
      },
      error: (err) => {
        console.log('err', err)
      }
    })
  }

  render () {
    return (
    <div>
    <div className="container-fluid stylish-form">
      <div className="container">
      <div className="row main">
        <div className="main-login main-center">
        <h5>Creat your Event here</h5>
          <form className="" method="post" action="#">
          <label>
                  <div className='form-group'>
                    <select name='eventType' className='form-control selectpicker btn btn-default' onChange={this.onChange}>
                      <option value='Select'>Select Category</option>
                      <option value='Sports'>Sports</option>
                      <option value='Social'>Social</option>
                      <option value=' Political'>Political</option>
                      <option value='Educational'>Educaional</option>
                      <option value='Art'>Art</option>
                    </select>
                  </div>
                </label>
            
            <div className="form-group">
              <label for="name" className="cols-sm-2 control-label">Event Name</label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-tree" aria-hidden="true"></i></span>
                  <input type="text" className="form-control" name="eventName"   placeholder="Enter your eventName" onChange={this.onChange} value={this.state.eventName}/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label for="email" className="cols-sm-2 control-label">Place</label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-building" aria-hidden="true"></i></span>
                  <input type="text" className="form-control" name="place"  placeholder="Enter your place" onChange={this.onChange} value={this.state.place}/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label for="username" className="cols-sm-2 control-label">Cost</label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <span className="input-group-addon"><i className="  fa fa-copyright" aria-hidden="true"></i></span>
                  <input type="text" className="form-control" name="cost"   placeholder="Enter the cost" onChange={this.onChange} value={this.state.cost}/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label for="password" className="cols-sm-2 control-label">Description</label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-pencil-square" aria-hidden="true"></i></span>
                  <input  className="form-control" name="description"  placeholder="Enter your event description" onChange={this.onChange} value={this.state.description}/>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label for="confirm" className="cols-sm-2 control-label">From</label>
              <div className="cols-sm-10">
                <div className="input-group">
                  <span className="input-group-addon"><i className="fa fa-history" aria-hidden="true"></i></span>
                 <FormControl type='date' name='startDate' onChange={this.onChange} placeholder='Start Date' autoFocus required value={this.state.startDate} />
                </div>
              </div>
            </div>

              <div className="form-group">
              <label for="confirm" className="cols-sm-2 control-label">Duration by days:</label>
              <div className="cols-sm-10">

                <div className="input-group">
                
                  <span className="input-group-addon"><i className="fa fa-clock-o" aria-hidden="true"></i></span>
                  <input  className="form-control" name="duration"  placeholder="Confirm your duration" onChange={this.onChange} value={this.state.duration}/>
                </div>
              </div>
            </div>
          </form>
          <div id='map'>
             <Map />
          </div>
        </div>
      </div>
      <Button id='jobb' bsStyle='primary' className='col-xs-4 col-xs-offset-4' onClick={this.create} type='submit' bsSize='large' >
                Create Event
     </Button>
    </div>
    </div>
    </div>
    )
  }
}

export default CreateEvent
