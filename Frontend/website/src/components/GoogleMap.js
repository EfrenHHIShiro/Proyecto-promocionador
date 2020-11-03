import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React,{Component} from 'react'

const containerStyle = {
    width: '25%',
    height: '50%'
  }
export class MapContainer extends Component {

    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},

      mapCenter: {
          lat: 20.9753700,
          lng:  -89.6169600,
      }
    };
    
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map google={this.props.google} 
            zoom={14 }
            containerStyle={containerStyle}
            initialCenter={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
            center={{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
            >
          <Marker
          position={{
            lat: this.state.mapCenter.lat,
            lng: this.state.mapCenter.lng
          }}/>
        </Map>
      )
    }
}

  

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyCbLvp4R-WoJOlAQo_UPT6jE5VXnz94yTw')
  })(MapContainer)