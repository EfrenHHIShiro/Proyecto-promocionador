import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {  
    IconButton,  
    makeStyles,
    Paper,
    InputBase,
    withStyles
} from '@material-ui/core'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import updateRegister from '../redux/actions/actions'
import { Field } from "formik";
//import { ErrorMessage } from '@hookform/error-message';

const DataPersonal = formikProps=> {


    const useStyles = makeStyles((theme) => ({
        content: {
            padding: theme.spacing(2),
            width: 330,
        },
        header: {
            display: 'flex', 
            justifyContent: 'center',
            '& p': {
                fontSize: 24,
                marginBottom: theme.spacing(1),
            },
        }, 
        body: {
            '& #object': {
                display: 'block',
                marginTop: theme.spacing(2),
                marginBottom: theme.spacing(4),
            },
            '& div': {
                display:'flex',
                justifyContent:'center',
                '& #ButtonAdd': {
                    marginBottom: theme.spacing(1),
                    color:'white',
                    backgroundColor: '#0367A6',
                    textTransform: 'none',
                },
            },
            
        },
        input: {
            display: 'none',
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
        error: {
            '& span':{
                color: '#bf1650',
                '&::before':{
                    display: 'inline',
                    content: '"⚠ "',
                },
            },
        },
        margin: {
            margin: theme.spacing(1),
        },
    }));
    const classes = useStyles();
    const { errors, touched } = formikProps;

    const asd = formikProps.values;
    console.log(asd)
    return (
        <>

            <Typography variant="h6" gutterBottom>
                Dato
            </Typography>
            <Grid container>
                <Grid item xs={12}>
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
                <Grid container spacing={4} className={ classes.error }>
                    <Grid item xs={12} sm={6} >
                        <Field
                             as={TextField}                         
                            name="bussinesname"
                            label="Nombre del negocio"
                            error={touched.bussinesname && errors.bussinesname}
                            helperText={touched.bussinesname && errors.bussinesname}
                            // helperText={<ErrorMessage errors={ errors } name="resourcedatas.firstname" /> }
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField                          
                            name="RFC"
                            label="RFC"
                            // helperText={ <ErrorMessage errors={ errors } name="resourcedatas.lastname" /> }
                            fullWidth
                            onChange={(e)=>updateRegister(e.target.value)}
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="resourcedatas.address"
                            label="Razon social"
                            fullWidth
                            autoComplete="shipping address-line1"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="resourcedatas.personalemail"
                            label="Email"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="Businessmail"
                            name="email"
                            label="Celular"
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="Cellphone"
                            name="Cellphone"
                            label="Direccion"
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="city"
                            name="city"
                            label="Ciudad"
                            fullWidth
                            autoComplete="shipping address-level2"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField id="state" name="state" label="State/Province/Region" fullWidth />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="zip"
                            name="zip"
                            label="Zip / Postal code"
                            fullWidth
                            autoComplete="shipping postal-code"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="country"
                            name="country"
                            label="Pais"
                            fullWidth
                            autoComplete="shipping country"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>

    );
}

export default DataPersonal