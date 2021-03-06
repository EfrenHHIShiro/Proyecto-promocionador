import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Button, Card, CardContent } from '@material-ui/core';
import { red, pink } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import GoogleMap from '../../components/GoogleMap'


// npm add react-native-web
const useStyles = makeStyles((theme) => ({
  layout: {
    width: '200px',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(60),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
}));


const MapRegister = () => {

  const classes = useStyles();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Selecciona la ubicación
      </Typography>
      <div className={classes.layout}>
        <GoogleMap />
      </div>
      <div>
        <Button align="right">
          Enviar
        </Button>
      </div>
    </React.Fragment>
  );
}

export default MapRegister
