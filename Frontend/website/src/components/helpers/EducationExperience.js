import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import { ScrollView } from 'react-native';
import { Card, CardContent } from '@material-ui/core';
import { red, pink } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import {withScriptjs, withGoogleMap, GoogleMap, Marker} from 'react-google-maps'
// import credentials from '../components/helpers/credentials'


// npm add react-native-web
const useStyles = makeStyles({
  root: {
    width: 350,
    backgroundColor: red,
    height: 310,
    overflowY: 'scroll',
  },
  title: {
    display: 'inline-block',
    margin: '0 6px',
    fontSize:20,
  },
  titlecard: {
    margin: '0 6px',
    fontSize:20,
    display: 'inline-block',
  },
  school: {
    margin: '0 6px',
    fontSize:13,
  },
  cardp:{
    width: 320,
    height:78,
    margin: '0 10px',
    marginTop:10,
  },
  icon:{
    marginLeft:180,
  },
});

const mapURL=`https://maps.googleapis.com/maps/api/js?key=AIzaSyCZQdWZWsNyakl30EbvVherj04c9hcqFc8&callback=initMap`;
const Map = (props)=>{
return (
  <GoogleMap
  defaultZoom={10}
  defaultCenter={{lat: -34.397, lng: 150.644}}
  />
)
}
const EducationExperience = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Selecciona la ubicación
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <div>
           <Map
         // googleMapURL={mapURL}
          containerElement={ <div style={{height:'200px'}}/>}
          mapElement= {<div style={{height:'100%'}}/>}
          loadingElement= {<p>Cargando</p>}
          />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withScriptjs(
  withGoogleMap(
    Map
  )
)
