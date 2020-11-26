import React from 'react';
import {
  CssBaseline,
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  makeStyles,
  Grid
} from '@material-ui/core/';
//import { Field } from "formik";

import BussinesRegister from './BussinesRegister';
import MapRegister from './RegisterMAP';
import Documents from './Documents';
import { StepButton } from "./ButtonStteper";
import { useForm } from 'react-hook-form';
//  //import { yupResolver } from '@hookform/resolvers';
// import * as yup from 'yup';
// import { useDispatch, useSelector } from 'react-redux';
// import { FormChange } from '../../actions/persistenceActions';
//import {Formik, Form} from "formik";



const useStyles = makeStyles((theme) => ({
  layout2: {
    width: '1000px',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(23),
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
  lay: {
    height: '90%',
  },
}));

const steps = ['Datos', 'Ubicación'];

const Checkout = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const [form, setForm] = React.useState([])
  const formData = {
    bussinesname: "",
    rfc: "",
    socialreason: "",
    email: "",
    cellphone: "",
    addres: "",
    longitude: "",
    latitude: "",
    country: ""
  };
  const onSubmit = data => {
    // data.image = data.image[0];
    // console.log(form);
    // dispatch( FormChange(data) );
    handleNext();
    console.log(formData, 'este es')
  }
  const { handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    formData
  });

  const renderStep = (activeStep) => {
    switch (activeStep) {
      case 0:
        return <BussinesRegister setActiveStep={setActiveStep} activeStep={activeStep} />;
      case 1:
        return <MapRegister setActiveStep={setActiveStep} className={classes.lay} />;
      // case 2:
      //   return <Documents values={values}  />;
      default:
        throw new Error('Unknown step');
    }
  }


  return (
    <React.Fragment>
      <div className={classes.layout}>
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
                  {/* <Formik
                  enableReinitialize
                  initialValues={{ ...formData }}
                  onSubmit={handleSubmit}
                  validate={validate}
                >
                {({values, errors, touched, setForm}) => (
                <Form className={classes.layout} onSubmit={handleSubmit(onSubmit)}   > */}
                  {renderStep(activeStep)}
                  {/* <div align="right">
                <StepButton values={values} touched={touched} setForm={setForm} activeStep={activeStep} />
                </div>

                </Form>    */}
                  {/* )}    */}
                  {/* </Formik>    */}
                </React.Fragment>
              )}
          </React.Fragment>
        </Paper>
      </div>
    </React.Fragment>
  );

}
export default Checkout 