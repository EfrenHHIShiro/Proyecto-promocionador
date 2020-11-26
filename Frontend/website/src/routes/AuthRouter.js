import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

// imports de componentes pantallas
import LoginScreen from '../components/auth/LoginScreen';
import Fondo from '../assets/images/hero.jpg'
import { makeStyles, withStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    containerbackground: {
        maxWidth: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#0367A6',
        WebkitBoxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
        mozboxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',   
    },
    logincontainer:{
        display: 'flex',
        width: '60vw',
        height: '70vh',
        WebkitBoxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
        mozboxShadow: '0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',
        boxShadow: '0 1px 10px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset',   
    },
    imageLogin:{
        justifyContent: 'center',
        borderRadius: '4% 0 0 4%',
        width: '100%',
    },
    tamnanio:{
        width: '100%',
        height: '100%',
        borderRadius: '2% 0 0 2%',
    
    },
    contentcomponentslogin:{
        backgroundColor: ' #858585',
        width: '100%',
        
        justifyContent: 'center',
        borderRadius: '0 2% 2% 0',
        boxShadow: '0 0 3px 0 rgba(0, 0, 0, .2)',
    },
}));
//Pantalla Login y password?
const AuthRouter = () => {
    const classes = useStyles();
    return (
        <div className={classes.containerbackground}>
            <div className={classes.logincontainer}>
                <div className={classes.imageLogin} >
                    <img  className={classes.tamnanio} src={Fondo} alt="Hola"/>
                </div>
                <div className={classes.contentcomponentslogin}>
                    <Switch>
                        <Route 
                            exact path="/auth/login"
                            component={ LoginScreen }/>
                        {/* <Route 
                            path="/auth/recovery+password"
                            component={ ForgottenPasword }/>
                        <Route
                            path="/auth/change+password/:userId"
                            component={ ChangePassword } />
                        <Route
                            path="/auth/verify+account/:userId"
                            component={ VerifyAccount } /> */}
                            
                        <Redirect to="/auth/login" />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default AuthRouter






