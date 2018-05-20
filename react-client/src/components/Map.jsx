import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';


class Map extends Component {
//   constructor(props){
//         super(props)
//         this.state = {
//           lat:0,
//           lng:0,
//           showingInfoWindow: false,
//           activeMarker: {},
//           Place: {}
//         }
//       }

// onMarkerClick(props, marker, e){
//   this.setState({
//     Place: props,
//     activeMarker: marker,
//     showingInfoWindow: true
//   })};


// onMapClicked (props){
//   if (this.state.showingInfoWindow) {
//     this.setState({
//       showingInfoWindow: false,
//       activeMarker: null
//     })
//   }
// };

  render(){
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 31.9454, lng: 35.9284 }}>
      </GoogleMap>
   ));
    return(
      <div>
        <GoogleMapExample
          containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
        {/* <Marker position={{lat:this.props.laltitude,lng:this.props.longitude}}
                 onClick={this.onMarkerClick} name={"Your locatoin"}
                  />
             
               <InfoWindow marker={this.state.activeMarker} 
                 visible={this.state.showingInfoWindow}> 

               <div>
                 <h1>{this.state.Place.name}</h1>
               </div>

             </InfoWindow> */}

      </div>
   );
   }
};
export default Map;






// render() {
//   return (
//       <div> 
      
//         <div>
//         {this.getLoc()// calling getLoc here will get your location once you open the app
//         }   

//           <Map style={{width:"60%",height:"30%"}} google={this.props.google} zoom={7}
//           //the map component which is made thanks to google maps react library 
//               initialCenter={{  lat:31.963158 ,lng:35.930359}}>

//               <Marker position={{lat:this.props.laltitude,lng:this.props.longitude}}
//               // a marker on the map that will show you your current location
//                 onClick={this.onMarkerClick} name={"Your locatoin"}
//                  />
             

//               <InfoWindow marker={this.state.activeMarker} 
//               //infoWindo will be shown once a marker is clicked     
//                 visible={this.state.showingInfoWindow}> 

//               <div>
//                 <h1>{this.state.Place.name}</h1>
//               </div>

//             </InfoWindow>

//           </Map>
//           </div>
          
//       </div>          
//   );
// }
// }












// import React, { Component } from 'react';
// import { withGoogleMap, GoogleMap } from 'react-google-maps';

// class Map extends Component {
//   shouldComponentUpdate() {
//     return false;
// }

// componentWillReceiveProps( nextProps ) {
//     this.map.panTo({lat: nextProps.lat, lng: nextProps.lng})
// }

// componentDidMount() {
//     // this.myLatLng = {lat: -25.363, lng: 131.044};
//     this.position = {
//       lat: this.props.lat,
//       lng: this.props.lng
//    };
//     this.mapOptions = {
//         center: this.position,
//         zoom: 5,
//         disableDefaultUI: true
//     };
//     this.map = new google.maps.Map(this.refs.map, this.mapOptions);
//     this.marker = new google.maps.Marker({
//         position: this.myLatLng,
//         map: this.map
//     });
// }
//   render(){
//     const GoogleMapExample = withGoogleMap(props => (
//       <GoogleMap
//       defaultZoom={8}
//       defaultCenter={{ lat: 31.9454, lng: 35.9284 }}>
//       onClick={props.onMapClick} >
//       {props.isMarkerShown && <Marker position={props.markerPosition}/> }
//       {props.isMarkerShown && <Nearest specialty={props.specialty}  lat={props.markerPosition.lat()} lng={props.markerPosition.lng()}/>}
//    </GoogleMap>

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


















// import React from 'react';
// import { compose, withStateHandlers } from "recompose";
// import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
// import $ from 'jquery';
// import ReactDOM from 'react-dom'

// const Map = compose(
//     withStateHandlers(() => ({
//         isMarkerShown: false,
//         markerPosition: null,        
//       }), {
//         onMapClick: ({ isMarkerShown }) => (e) => ({
//           markerPosition: e.latLng,
//           isMarkerShown:true,
        
//       })
//       }
//       ),
    

//     withScriptjs,
//     withGoogleMap
//     )
// (props =>
//   <div >
        
        
//         <GoogleMap
//             defaultZoom={8}
//             defaultCenter={{ lat: 31.9454, lng: 35.9284 }}
//             onClick={props.onMapClick} >
//             {props.isMarkerShown && <Marker position={props.markerPosition}/> }
//             {props.isMarkerShown && <Nearest specialty={props.specialty}  lat={props.markerPosition.lat()} lng={props.markerPosition.lng()}/>}
//          </GoogleMap>

//          </div>


//     )
// export default class MapContainer extends React.Component {
  
//     constructor(props) {
//         super(props)
//   }

//     render() {
//         return (
//           <div>
//           <div className="map" >
          
              
//                 <Map 
//                     googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_s8BRe0493QchXWEDa_WkF8tzDLLWeLE"
//                     loadingElement={<div style={{ height: `50%` }} />}
//                     containerElement={<div style={{ height: `400px` }} />}
//                     mapElement={<div style={{ height: `50%` }} />}
//                 />
          
         
//              </div>
//              </div>
//         )
//     }
// }




















// import React, { Component } from 'react';
// import { withGoogleMap, GoogleMap,Marker,InfoWindow } from 'react-google-maps';

// class Map extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       lat:0,
//       lng:0,
//       showingInfoWindow: false,
//       activeMarker: {},
//       Place: {}
//     }
//   }


// onMarkerClick(props, marker, e){
//   this.setState({
//     Place: props,
//     activeMarker: marker,
//     showingInfoWindow: true
//   })};

// onMapClicked (props){
//   if (this.state.showingInfoWindow) {
//     this.setState({
//       showingInfoWindow: false,
//       activeMarker: null
//     })
//   }
// };
//   render(){
//     const GoogleMapExample = withGoogleMap(props => (
//       <GoogleMap
//         defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
//         defaultZoom = { 13 }
//       >
//       </GoogleMap>
//    ));
//     return(
//       <div>
//         <GoogleMapExample
//           containerElement={ <div style={{ height: `500px`, width: '500px' }} /> }
//           mapElement={ <div style={{ height: `100%` }} /> }
//           defaultZoom={8}
//                        defaultCenter={{ lat: 31.9454, lng: 35.9284 }}
//                        onClick={props.onMapClick} />
//                        {props.isMarkerShown && <Marker position={props.markerPosition}/> }
//                        {props.isMarkerShown && <Nearest specialty={props.specialty}  lat={props.markerPosition.lat()} lng={props.markerPosition.lng()}/>}
//                         <div>
         
//                 <Marker position={{lat:this.props.laltitude,lng:this.props.longitude}}
//                   onClick={this.onMarkerClick} name={"Your locatoin"}
//                    />
              
//             </div>
//       </div>
//    );
//    }
// };
// export default Map;























































// import React, { Component } from 'react';
// import { withGoogleMap, GoogleMap } from 'react-google-maps';

// class Map extends Component {
//   render(){
//     const GoogleMapExample = withGoogleMap(props => (
//       <GoogleMap
//         defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
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


