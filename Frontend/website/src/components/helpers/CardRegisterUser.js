import React from 'react';
import {
  TextField,
  Button,
  Link,
} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import FacebookIcon from '../../assets/icons/facebook.svg';
import GoogleIcon from '../../assets/icons/google.svg';


const CssTextField = withStyles(theme => ({
  root: {
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0597F2',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#0367A6',
      },
      '&:hover fieldset': {
        borderColor: '#0367A6',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0597F2',
      }
    }
  }
}))(TextField);

const useStyles = makeStyles((theme) => ({
  root: {
    height: '70vh',
    width: '70vh',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderRadius: 10,
    backgroundColor: '#858585',
    color: '#ffffff',
  },
  paper: {
    margin: theme.spacing(1, 6),
    display: 'flex',
    flexDirection: 'column',
  },
  logo: {
    width: 35,
  },
  lg: {
    marginLeft: 35,
  },
  buttonlogoGoogle: {
    backgroundColor: '#EEEEEE',
    color: 'black',
    height: 50,
    width: 200,
  },
  buttonlogoFacebook: {
    backgroundColor: '#1977F3',
    color: 'white',
    height: 50,
    width: 200,
  },
  form: {
    width: '100%',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#0367A6',
  },
  links: {
    color: '#ffffff',
    marginLeft: '28%',
  },
  text:
  {
    color: '#586A98',
  },
}));

const CardRegisterUser = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
        <Grid container  xs={12} sm={12} >
          <h1 className={classes.lg}>Registrarse</h1>
          <Grid container justify="space-around" direction="row">
          <Button
            variant="contained"
            color="secondary"
            startIcon={<img className={classes.logo} alt="Portal Logo" src={FacebookIcon} align="center" />}
            className={classes.buttonlogoFacebook}
          >
            Continuar con Facebook
          </Button>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<img className={classes.logo} alt="log" src={GoogleIcon} align="center" />}
            className={classes.buttonlogoGoogle}
          >
            Continuar con Google
          </Button>
         </Grid>
      </Grid>
      <div className={classes.paper}>
      <Grid container justify="center">
        <h2>O</h2>
      </Grid>
        <form className={classes.form} noValidate>
          <CssTextField
            variant="outlined"
            margin="normal"
            color="#ffffff"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputProps={{ style: { color: 'white' } }}
          />
          <CssTextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            inputProps={{ style: { color: 'white' } }}
          />
          <CssTextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="Confirm password"
            label="Confirm Password"
            type="password"
            id="Confirm password"
            autoComplete="current-password"
            inputProps={{ style: { color: 'white' } }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Iniciar sesion
            </Button>
        </form>
      </div>
    </Grid>
  );
}
export default CardRegisterUser