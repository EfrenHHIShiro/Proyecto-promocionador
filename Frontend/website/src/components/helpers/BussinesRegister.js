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
import { Formik } from "formik";
import {Button } from '@material-ui/core';
import Api from '../helpers/Api'
import { useHistory } from 'react-router';
//import { ErrorMessage } from '@hookform/error-message';



const DataPersonal = ({setActiveStep}) => {
    const history = useHistory();
    const next=()=>{
        {setActiveStep((activeStep) => activeStep + 1)}
    }
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
   // const { errors, touched } = formikProps;
    const RegisterNewUser = async (data)=>{
        const response = await Api.post('auth/LoginUser', data)
        console.log(response, 'La respuesta fue de')
        history.replace('/Home')
    }
    return (
        <>

            <Typography variant="h6" gutterBottom>
                Datos
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
        <Formik
            initialValues={{idcategory:'', bussinesname:'',rfc:'', socialreason:'', email:'', cellphone:'', addres:''
            , postalcode:'', longitude:'-89.6169600', latitude:'20.9753700', 
            country:{idcountry:'12hbocsa3iua',countryname:'Mérida',idstate:'31',statename:'Yucatan'}}}
                onSubmit={(data, { setSubmitting})=>{
                setSubmitting(true);
                console.log('enviaste', data)
                setSubmitting(false);
                next()

            }}
            >
            {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
           <form onSubmit={handleSubmit}>
               <Grid container spacing={4} className={ classes.error }>
                    <Grid item xs={12} sm={6} >
                        <TextField                     
                            name="bussinesname"
                            label="Nombre del negocio"
                            value={values.bussinesname}
                            onChange={handleChange}
                            onBlur={handleBlur}     
                            // error={touched.bussinesname && errors.bussinesname}
                            // helperText={touched.bussinesname && errors.bussinesname}
                            // helperText={<ErrorMessage errors={ errors } name="resourcedatas.firstname" /> }
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField                          
                            name="rfc"
                            label="RFC"
                            value={values.rfc}
                            onChange={handleChange}
                            onBlur={handleBlur}     
                            // helperText={ <ErrorMessage errors={ errors } name="resourcedatas.lastname" /> }
                            fullWidth
                           // onChange={(e)=>updateRegister(e.target.value)}
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            name="socialreason"
                            label="Razon social"
                            value={values.socialreason}
                            onChange={handleChange}
                            onBlur={handleBlur}     
                            fullWidth
                            autoComplete="shipping address-line1"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}     
                            label="Email"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="cellphone"
                            value={values.cellphone}
                            onChange={handleChange}
                            onBlur={handleBlur}     
                            label="Celular"
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            name="addres"
                            label="Direccion"
                            value={values.addres}
                            onChange={handleChange}
                            onBlur={handleBlur}     
                            fullWidth
                            autoComplete="family-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            id="country"
                            value={values.country.countryname}
                            onChange={handleChange}
                            onBlur={handleBlur}     
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
                            name="postalcode"
                            label="Zip / Postal code"
                            value={values.postalcode}
                            onChange={handleChange}
                            onBlur={handleBlur}     
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
                <div align="right">
                 <Button disabled={isSubmitting}  type="submit" className="btn" color="primary">Siguiente</Button>
            </div>
            </form>
            )}
            </Formik>
            </Grid>
        </>

    );
}

export default DataPersonal