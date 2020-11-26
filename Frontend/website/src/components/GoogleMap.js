import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React,{Component} from 'react'
import {useLocation} from 'react-router-dom'
import PlacesAutocomplete, {
    geocodeByAddress,
    getLatLng,
  } from 'react-places-autocomplete';
  import Grid from '@material-ui/core/Grid';

const containerStyle = {
    width: '48%',
    height: '50%'
  }
 class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { address: '',

        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},  
        mapCenter: {
            lat: 20.9753700,
            lng:  -89.6169600,
        } 
    }
 };

    handleChange = address => {
        this.setState({ address });
      };
     
      handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng =>{
            console.log('Success', latLng)
            this.setState({address})
            this.setState({mapCenter: latLng})
          })
          .catch(error => console.error('Error', error));
      };
        
    render() {
      return (
          <div>
      <PlacesAutocomplete
        value={this.state.address}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
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
        </Grid>
        </Grid>
        </div>
      )
    }
}

  

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyB-lgHBNL41XX6C8k6IPAjMOAA4anR3QGo')
  })(MapContainer)