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
 const  MapContainer=()=> {
        const [state, setState] = React.useState({ address: '',
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
        mapCenter: {
            lat: 20.9753700,
            lng:  -89.6169600,
        } 
    })


    const handleChange = address => {
        setState({ address });
      };
     
      const handleSelect = address => {
        geocodeByAddress(address)
          .then(results => getLatLng(results[0]))
          .then(latLng =>{
            console.log('Success', latLng.lng)
            setState({address})
            setState({mapCenter: latLng})
          })
          .catch(error => console.error('Error', error));
      };
        
      return (
          <div>
      <PlacesAutocomplete
        value={state.address}
        onChange={state.handleChange}
        onSelect={state.handleSelect}
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
        <Map google={google} 
            zoom={14 }
            containerStyle={containerStyle}
            initialCenter={{
                lat: state.mapCenter.lat,
                lng: state.mapCenter.lng
            }}
            center={{
                lat: setState.mapCenter.lat,
                lng: setState.mapCenter.lng
            }}
            >
          <Marker
          position={{
            lat: setState.mapCenter.lat,
            lng: setState.mapCenter.lng
          }}/>
        </Map>
        </Grid>
        </Grid>
        </div>
      )
    };

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyB-lgHBNL41XX6C8k6IPAjMOAA4anR3QGo')
  })(MapContainer)