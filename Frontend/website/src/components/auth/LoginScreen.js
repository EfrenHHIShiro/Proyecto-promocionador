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
import {Formik} from 'formik'
import Api from '../helpers/Api'
import { useHistory } from 'react-router';

const CssTextField = withStyles(theme => ({
  root: {
    '& label.Mui-focused': {
      color: '#858585',
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
    backgroundColor: '#ffffff',
    color: '#858585',
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
    color: '#858585',
    marginLeft: '28%',
  },
  text:
  {
    color: '#858585',
  },
}));



export default function SignInSide() {
  const classes = useStyles();
  const history = useHistory();

  const loginApi = async (data)=>{
    const response = await Api.post('auth/LoginUser/', data)
    console.log(response, 'La respuesta fue de')
    // history.push('/Home')
  }

  return (
    <Grid container className={classes.root}>
      <Grid container spacing={3}>
        <h1 className={classes.lg}>Inicio de sesión</h1>
      </Grid>
      <div className={classes.paper}>
      <Formik
            initialValues={{email:'', password:''}}
                onSubmit={(data, { setSubmitting})=>{
                setSubmitting(true);
                console.log('enviaste', data)
                loginApi(data)
                setSubmitting(false);
               // next()

            }}
            >
            {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
        <form onSubmit={handleSubmit} className={classes.form} noValidate>
          <CssTextField
            variant="outlined"
            margin="normal"
            // color="#858585"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            inputProps={{ style: { color: 'white' } }}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}  
          />
          <CssTextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            // color="#858585"
            type="password"
            id="password"
            autoComplete="current-password"
            // inputProps={{ style: { color: 'white' } }}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}  
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
            disabled={isSubmitting}
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
            )}
        </Formik>
      </div>
    </Grid>
  );
}
