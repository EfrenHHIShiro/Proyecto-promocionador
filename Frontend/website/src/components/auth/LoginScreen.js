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
    height: '69.9vh',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#858585',
    color: '#ffffff',
  },
  paper: {

    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  logop: {
    width: 15,
  },
  lg: {
    marginTop: 20,
    marginLeft: 140,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
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
    color: '#ffffff',
  },
}));



export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid container spacing={3}>
        <h1 className={classes.lg}>Inicio de sesión</h1>
      </Grid>
      <div className={classes.paper}>
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
          <Grid container justify="flex-end">
            <Link href="/auth/recovery+password" className={classes.text & classes.links}>
              ¿Se te olvidó tu contraseña?
            </Link>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Iniciar sesion
            </Button>
          <Grid container justify="center" className={classes.text}>
            Sí eres nuevo usuario.
            <Link href="/auth/verify+account/:userId">
              Registrarse aquí
            </Link>
          </Grid>
        </form>
      </div>
    </Grid>
  );
}
