import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import { ScrollView } from 'react-native';
import { Card, CardContent, Paper, Button } from '@material-ui/core';
import { red, pink } from '@material-ui/core/colors';
import { makeStyles,withStyles  } from '@material-ui/core/styles';
import Add from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import LinearProgress from '@material-ui/core/LinearProgress';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const TechnicalsLenguagesCardContent = withStyles(theme => ({
  root: {
    padding: 10
  }
}))(CardContent);
const SoftCardContent = withStyles(theme => ({
  root: {
    padding: 0,
    marginLeft:10,
  }
}))(CardContent);
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 4,
    borderRadius: 5,
    width:200,
    display: 'inline-block',
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    width: 350,
    height: 200,
    overflowY: 'scroll',
    padding: 12,
  },
  title: {
    display: 'inline-block',
    margin: '0 6px',
    fontSize:10,
  },
  titlecard: {
    margin: '0 6px',
    fontSize:20,
    display: 'inline-block',
  },
  cardp:{
    width: 310,
    height:40,
    margin: '0 10px',
    marginTop:10,
    paddingBottom:-100,
  },
  cardsoft:{
    width: 310,
    height:40,
    margin: '0 10px',
    marginTop:10,
  },
  icon:{
    marginLeft:180,
  },
  superposition: {
    position: 'absolute',
    bottom:3,
    right: 3,
    '& #buttonPhoto': {
        color: '#000000',
    },
},
paper: {
    width: 120, 
    height:120,
    borderRadius: '100%',
    position: 'relative', 
    marginLeft: '42%',
    marginBottom: theme.spacing(3),
    '& img':{ 
        width: '100%',
        height: '100%',
        margin: 'auto',
        borderRadius: '100%',
    },
},
});

const useStyless = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));


const SkillsLanguages= ({hard,lang,sof}) => {
  const classes = useStyles();
  const classe = useStyless();
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Proporcione los documentos solicitados
      </Typography>
      <Grid container spacing={3}>
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
    </React.Fragment>
    
  );
  
}
export default SkillsLanguages;
