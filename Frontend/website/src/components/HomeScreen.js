import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import logo from '../assets/images/ic_git_logo_icon.svg';
import RegisterScreen from '../components/helpers/CardRegister';

import LoginScreen from '../components/auth/LoginScreen';
import Rg from '../components/RegisterScreen';


const HomeScreen = () => {
    const styles = makeStyles((theme) => ({
        divContent: {
            width: '100%',
            height: '100%',
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0 auto',
        },
        logo: {
            padding: "1rem",
            width: 500,
            maxWidth: 500,
            opacity: 0.5,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            [theme.breakpoints.down("sm")]: {
                width: 280,
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
            }
        },
    }));
    const classes = styles();
    
    // const onSubmit = data => {
        // data.file = data.file[0];
        // const form = new FormData();
        // form.append("file", data.file);
        // const json = JSON.stringify(data);
        // form.append("data", json);
        // Axios.post("http://localhost:8080/register/", form).then(resp => {
        //     console.log(resp.data);
        // }).catch( error => {

        // });
    // }
    return (
        // Para pruebas comentar estas lineas
        <Rg/>

    )
}

export default HomeScreen
