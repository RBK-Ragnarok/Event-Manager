import React, { Component } from 'react'
import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps'
import { compose, withStateHandlers } from 'recompose'
import $ from 'jquery'
import ReactDOM from 'react-dom'
// import Map2 from '/Map2.jsx'
const Map = compose(
  withStateHandlers(() => ({
    isMarkerShown: false,
    markerPosition: null
  }), {
    onMapClick: ({ isMarkerShown }) => (e) => {
      console.log(e.latLng.lng())
      console.log(e.latLng.lat())
      // this.props.test(e.latLng.lng(), e.latLng.lat())
      // this.setState({lat:e.latLng.lat(),lng:e.latLng.lng()})
      // console.log(this.state.lat)
      return ({
        markerPosition: e.latLng,
        isMarkerShown: true

      })
    }
  }
  ),
  withScriptjs,
  withGoogleMap
)
(props =>
  <div >
    <GoogleMap
      defaultZoom={8}
      defaultCenter={{ lat: 31.9454, lng: 35.9284 }}
      onClick={(e) => { props.onMapClick(e), props.handlelatlng(e.latLng.lng(), e.latLng.lat()) }} >
      {props.isMarkerShown && <Marker position={props.markerPosition} /> }
    </GoogleMap>
  </div>
)

export default class MapContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0
    }
    // this.test = this.test.bind(this)
  }

  test (lng, lat) {
    this.setState({
      lat: 232332,
      lng: 2323455
    })
    console.log(this.state)
  }

  render () {
    return (
      <div>
        <div className='map' >

          <Map
            handlelatlng={this.props.setLngLat}
            googleMapURL='https:maps.googleapis.com/maps/api/js?key=AIzaSyCraOU8nyaSGWghFudXj_yWBSsFVkSD68g'
            loadingElement={<div style={{ height: `300px` }} />}
            containerElement={<div style={{ height: `300px` }} />}
            mapElement={<div style={{ height: `300px` }} />}
            // test={this.test}
          />

        </div>

      </div>
    )
  }
}

// import React, { Component } from 'react';
// import { withGoogleMap, GoogleMap } from 'react-google-maps';

// class Map extends Component {
//   render(){
//     const GoogleMapExample = withGoogleMap(props => (
//       <GoogleMap
//         defaultCenter = { { lat: 31.9454, lng: 35.9284 } }
//         defaultZoom = { 13 }
//       >
//       </GoogleMap>
//    ));
//     return(
//       <div>
//         <GoogleMapExample
//           containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
//           mapElement={ <div style={{ height: `100%` }} /> }
//         />
//       </div>
//    );
//    }
// };
// export default Map;
