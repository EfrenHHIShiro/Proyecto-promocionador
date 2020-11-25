import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import { ScrollView } from 'react-native';
import { Card, CardContent, Paper, Button } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import { List, ListItem, ListItemText } from '@material-ui/core/';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 350,
    height: 200,
    overflowY: 'scroll',
    padding: 12,
  },
  superposition: {
    position: 'absolute',
    bottom: 3,
    right: 3,
    '& #buttonPhoto': {
      color: '#000000',
    },
  },
  input: {
    display: 'none',
  },
  paper: {
    width: 90,
    height: 90,
    borderRadius: '100%',
    position: 'relative',
    marginLeft: '30%',
    marginBottom: theme.spacing(1),
    '& img': {
      width: '100%',
      height: '100%',
      margin: 'auto',
      borderRadius: '90%',
    },
  },
}));




const Documents = (formikProps) => {
  const { bussinesname} = formikProps.values;
  const classes = useStyles();
  return (
    <React.Fragment >
      <Typography variant="h6" gutterBottom>
        Proporcione los documentos correspondientes
        <List>
          <ListItem>
            <ListItemText
              primary='First Name'
              secondary={bussinesname}
            />
          </ListItem>
          </List>
            </Typography>
      <div >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7} >
            <h1>FOTO RFC EMPRESARIAL </h1>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper} >
              {/* <img src={file.file} alt="Hardskill" /> */}
              <input
                // name="image"
                // ref={ register }
                accept="image/*"
                className={classes.input}
                id="image-input"
                type="file" />
              <label htmlFor="image-input" className={classes.superposition}>
                <IconButton id="buttonPhoto" size="small" aria-label="upload picture" component="span">
                  <PhotoCamera fontSize="small" />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7}>
            <h1>FOTO IDENTIFICACIÓN</h1>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper} >
              {/* <img src={file.file} alt="Hardskill" /> */}
              <input
                // name="image"
                // ref={ register }
                accept="image/*"
                className={classes.input}
                id="image-input"
                type="file" />
              <label htmlFor="image-input" className={classes.superposition}>
                <IconButton id="buttonPhoto" size="small" aria-label="upload picture" component="span">
                  <PhotoCamera fontSize="small" />
                </IconButton>
              </label>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={7}>
            <h1>FOTO COMPROBANTE SAT</h1>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Paper className={classes.paper} >
              {/* <img src={file.file} alt="Hardskill" /> */}
              <input
                // name="image"
                // ref={ register }
                accept="image/*"
                className={classes.input}
                id="image-input"
                type="file" />
              <label htmlFor="image-input" className={classes.superposition}>
                <IconButton id="buttonPhoto" size="small" aria-label="upload picture" component="span">
                  <PhotoCamera fontSize="small" />
                </IconButton>
              </label>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>

  );

}
export default Documents;
