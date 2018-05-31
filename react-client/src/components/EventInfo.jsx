import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
// import { Link } from 'react-router-dom';
import AppRouter from '../routes/AppRouter.jsx'
import {Navbar, Nav, NavItem, Carousel, Jumbotron, Button, ButtonToolbar,
  Overlay, Popover, OverlayTrigger, FormControl} from 'react-bootstrap'
import EventList from './Profile.jsx'
import Comment from './Comment.jsx'
import Map from './Map.jsx'
import Map2 from './Map2.jsx'
import EventTimer from './EventTimer.jsx'
import {
  Route,
  Link,
  Switch,
  browserHistory,
  BrowserRouter as Router
} from 'react-router-dom'

class EventInfo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      eventName: '',
      duration: '',
      startDate: '',
      place: '',
      eventType: '',
      cost: '',
      description: '',
      message: '',
      commentText: '',
      comments: [],
      lat: 0,
      lng: 0,
      date: ''
    }
    this.onChange = this.onChange.bind(this)
    this.add = this.add.bind(this)
    this.addComment = this.addComment.bind(this)
    // this.setLngLat=this.setLngLat.bind(this)
  }

  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  componentWillMount () {
    // console.log("hello",this.props.match.params.id)
  }
  componentDidMount (info) {
    $.ajax({
      type: 'POST',
      url: `/event/${this.props.match.params.id}`,
      success: (data) => {
        // var eventinfo = this.state.events.concat([data]);
        console.log(data)
        this.setState({
          eventName: data.eventName,
          duration: data.duration,
          startDate: data.startDate,
          place: data.place,
          eventType: data.eventType,
          cost: data.cost,
          description: data.description,
          comments: data.comments,
          lat: data.lat,
          lng: data.lng

        })
      },
      error: (err) => {
        console.log('err', err)
      }
    })
  }

  add (event) {
    var that = this

    $.ajax({
      url: '/user',
      type: 'PUT',
      data: this.state,
      success: (data) => {
        console.log('event added')
        that.setState({message: 'Event Added'})
      },
      error: (err) => {
        console.log('err', err)
      }
    })
  }

  addComment () {
    var that = this
    //
    // that.setState({date:new Date().toString()})

    $.ajax({
      url: `/comment`,
      type: 'POST',
      data: this.state,
      success: (data) => {
        console.log('comment sent')
        that.setState({message: 'Send comment'})
      },
      complete: () => {
        $.ajax({
          type: 'POST',
          url: `/event/${this.props.match.params.id}`,
          success: (data) => {
            console.log(data)
            this.setState({

              comments: (data.comments).reverse()

            })
            console.log(this.state.comments)
          },
          error: (err) => {
            console.log('err', err)
          }
        })
      },
      error: (err) => {
        console.log('err', err)
      }
    })
  }

  render () {
    return (
      <div>
        <section id='contact'>
          <div className='section-content'>
            <h3><b id='lable'> Event Name : {this.state.eventName}</b></h3>
          </div>
          <div className='contact-section'>
            <div className='container'>
              <form>
                <div className='col-md-6 form-line'>
                  <div className='form-group'>
                    <label for='exampleInputEmail'><b id='lable'> Place :</b></label>
                    <p className='lead' className='fa-2x'>{this.state.place} </p>
                  </div>
                  <div className='form-group'>
                    <label for='telephone'><b id='lable'> StartDate :</b></label>
                    <p className='lead' className='fa-2x'>{this.state.startDate} </p>
                  </div>
                  <div className='form-group'>
                    <label for='telephone'><b id='lable'> Cost :</b></label>
                    <p className='lead' className='fa-2x'>{this.state.cost} </p>
                  </div>
                  <div className='form-group'>
                    <label for='telephone'><b id='lable'> Duration :</b></label>
                    <p className='lead' className='fa-2x'>{this.state.duration} </p>
                  </div>
                  <div className='form-group'>
                    <label for='telephone'><b id='lable'> Type :</b></label>
                    <p className='lead' className='fa-2x'>{this.state.eventType} </p>
                  </div>
                  <div className='form-group'>
                    <label for='exampleInputUsername'><b id='lable'>Description : </b></label>
                    <p className='lead' className='fa-2x'>{this.state.description} </p>
                  </div>
                  <div>
                    <Link to='/Profile'><button type='button' className='btn btn-default submit block-center' onClick={this.add}> Attend</button></Link>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label for='description' id='lable'> Add Comment </label>
                    <textarea className='form-control' id='description' placeholder='Enter Your Comment' name='commentText' onChange={this.onChange} />
                  </div>
                  <div>
                    <button type='button' className='btn btn-default submit' onClick={this.addComment}> Add Comment</button>
                  </div>
                  {(this.state.comments).map(comment => <Comment key={comment._id} comment={comment} />)}
                </div>
              </form>
            </div>
            <div>
              <Map2 pos={{lng: this.state.lng, lat: this.state.lat}} />
            </div>
          </div>
        </section>
      </div>

    )
  }
}

export default EventInfo
