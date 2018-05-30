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
    console.log(Map)
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
      lng: 0,
      lat: 0,
      message: ''

    }
    this.onChange = this.onChange.bind(this)
    this.create = this.create.bind(this)
   // this.handleChangesLongitude = this.handleChangesLongitude.bind(this)
   // this.handleChangesLaltitude = this.handleChangesLaltitude.bind(this)
    this.setLngLat = this.setLngLat.bind(this)
    // this.handlelatlng = this.handlelatlng.bind(this)
  }
  onChange (e) {
    var name = e.target.name
    var value = e.target.value
    this.setState({[name]: value})
  }

  create () {
    var that = this
console.log(this.state)
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

  // handlelatlng (event) {
  //   console.log('lolo', this.state.lat())
  //   $.ajax({
  //     type: 'POST',
  //     url: '/',
  //     data: {
  //       lat: this.state.lat(),
  //       lng: this.state.lng()
  //     },
  //     success: (data) => {
  //       console.log('success', data)
  //     },
  //     error: (err) => {
  //       console.log('err', err)
  //     }
  //   })
  //   event.preventDefault()
  // }
  setLngLat (lng, lat) {
    this.setState({lng: lng,
      lat: lat})
    console.log(lat,lng)
  }

  // // here we will change this.state.longitude when ever the value of the textbox is changed
  // handleChangesLongitude (event) {
  //   //this.setState({lng: event.target.value})
  //   console.log(this.state.lng)
  // }

  // handleChangesLaltitude (event) {
  //   this.setState({lat: event.target.value})
  //   console.log(this.state.lat)
  // }

  render () {
    return (
      <div>
        <div className='container-fluid stylish-form'>
          <div className='container'>
            <div className='row main'>
              <div className='main-login main-center'>
                <h5>Creat your Event here</h5>
                <form className='' method='post' action='#'>
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

                  <div className='form-group'>
                    <label for='name' className='cols-sm-2 control-label'>Event Name</label>
                    <div className='cols-sm-10'>
                      <div className='input-group'>
                        <span className='input-group-addon'><i className='fa fa-tree' aria-hidden='true' /></span>
                        <input type='text' className='form-control' name='eventName' placeholder='Enter your eventName' onChange={this.onChange} value={this.state.eventName} />
                      </div>
                    </div>
                  </div>

                  <div className='form-group'>
                    <label for='email' className='cols-sm-2 control-label'>Place</label>
                    <div className='cols-sm-10'>
                      <div className='input-group'>
                        <span className='input-group-addon'><i className='fa fa-building' aria-hidden='true' /></span>
                        <input type='text' className='form-control' name='place' placeholder='Enter your place' onChange={this.onChange} value={this.state.place} />
                      </div>
                    </div>
                  </div>

                  <div className='form-group'>
                    <label for='username' className='cols-sm-2 control-label'>Cost</label>
                    <div className='cols-sm-10'>
                      <div className='input-group'>
                        <span className='input-group-addon'><i className='  fa fa-copyright' aria-hidden='true' /></span>
                        <input type='text' className='form-control' name='cost' placeholder='Enter the cost' onChange={this.onChange} value={this.state.cost} />
                      </div>
                    </div>
                  </div>

                  <div className='form-group'>
                    <label for='password' className='cols-sm-2 control-label'>Description</label>
                    <div className='cols-sm-10'>
                      <div className='input-group'>
                        <span className='input-group-addon'><i className='fa fa-pencil-square' aria-hidden='true' /></span>
                        <input className='form-control' name='description' placeholder='Enter your event description' onChange={this.onChange} value={this.state.description} />
                      </div>
                    </div>
                  </div>

                  <div className='form-group'>
                    <label for='confirm' className='cols-sm-2 control-label'>From</label>
                    <div className='cols-sm-10'>
                      <div className='input-group'>
                        <span className='input-group-addon'><i className='fa fa-history' aria-hidden='true' /></span>
                        <FormControl type='date' name='startDate' onChange={this.onChange} placeholder='Start Date' autoFocus required value={this.state.startDate} />
                      </div>
                    </div>
                  </div>

                  <div className='form-group'>
                    <label for='confirm' className='cols-sm-2 control-label'>Duration by days:</label>
                    <div className='cols-sm-10'>

                      <div className='input-group'>

                        <span className='input-group-addon'><i className='fa fa-clock-o' aria-hidden='true' /></span>
                        <input className='form-control' name='duration' placeholder='Confirm your duration' onChange={this.onChange} value={this.state.duration} />
                      </div>
                    </div>
                  </div>
                </form>
                <div id='map'>
                  <Map setLngLat={this.setLngLat}/>
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
