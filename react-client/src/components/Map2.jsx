import React from 'react';
import { compose, withProps, lifecycle,withStateHandlers} from 'recompose';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
} from 'react-google-maps';
import Map from './Map.jsx'
//import keys from '../../components/config/keys';

const MapWithAMarker = compose(
    
    withScriptjs,
    withGoogleMap
)(props =>{
    return (
        <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 31.9454, lng: 35.9284 }} >
        <Marker position={props.pos}/>}
    </GoogleMap>
    )
}
    
);
export default class Map2 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lat: 0,
      lng: 0
    }
  }
render () {
    console.log(this.props.pos)
    return (
      <div>
        <div className='MapWithAMarker' >

          <MapWithAMarker
           pos={this.props.pos}
           googleMapURL='https:maps.googleapis.com/maps/api/js?key=AIzaSyCraOU8nyaSGWghFudXj_yWBSsFVkSD68g'
            loadingElement={<div style={{ height: `300px` }} />}
            containerElement={<div style={{ height: `300px` }} />}
            mapElement={<div style={{ height: `300px` }} />}
            
          />

        </div>
      </div>
    )
  }
}