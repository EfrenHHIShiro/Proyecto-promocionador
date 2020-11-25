import React from 'react';
import { 
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  makeStyles 
} from '@material-ui/core/';
import { Field } from "formik";

import BussinesRegister from './BussinesRegister';
import MapRegister from './RegisterMAP';
import Documents from './Documents';

import { useForm } from 'react-hook-form';
//  //import { yupResolver } from '@hookform/resolvers';
// import * as yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
// import { FormChange } from '../../actions/persistenceActions';
import {Formik, Form} from "formik";



const useStyles = makeStyles((theme) => ({
  layout2:{
    width: '1000px',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(6),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      padding: theme.spacing(4),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

const steps = ['Datos','Ubicación', 'Documentos'];

const Checkout =()=> {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    console.log(formData, 'Tiene')
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const formData = {
    bussinesname: "",
    rfc: "",
    socialreason: "",
    email: "",
    cellphone: "",
    addres:"",
    longitude: "",
    latitude:"",
    country: ""
  };
  const onSubmit = data=> {
    // data.image = data.image[0];
    // console.log(form);
    // dispatch( FormChange(data) );
    handleNext();
    console.log(formData, 'este es')
  }
  const { handleSubmit} = useForm({
   // resolver: yupResolver(schema),
    formData
  });

  const renderStep = (activeStep,values, errors, touched) => {
    switch (activeStep) {
      case 0:
        return <BussinesRegister touched={touched} errors={errors}   />;
      case 1:
        return <MapRegister touched={touched} errors={errors}   className="layout2"/>;
      case 2:
        return <Documents values={values} />;
      default:
        throw new Error('Unknown step');
    }
  }
  const validate = values => {
    const errors = {};
    if (!values.bussinesname) {
      errors.bussinesname = "Required";
    }

    if (!values.middleName) {
      errors.middleName = "Required";
    }

    return errors;
  };

  return (
    <>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
              NUEVOS REGISTROS
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <React.Fragment >
            {activeStep === steps.length ? (
              <React.Fragment>
                <Typography variant="h5" gutterBottom>
                  Registro completo.
                </Typography>
                <Typography variant="subtitle1">
                  Se ha enviado un correo a la direccion proporcionada, porfavor revisalo y continua.
                </Typography>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Formik
                  enableReinitialize
                  initialValues={{ ...formData }}
                  onSubmit={handleSubmit}
                  validate={validate}
                >
                {({values, errors, touched}) => (
                <Form className={classes.layout} onSubmit={handleSubmit(onSubmit)}   >
                {renderStep(activeStep, values,errors, touched)}
                <div className={classes.buttons}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} className={classes.button}>
                      Volver
                    </Button>
                  )}
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                  </Button>
                </div>
                </Form>   
                        )}   
                </Formik>   
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>  
        </>
  );

}
export default Checkout