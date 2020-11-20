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


import BussinesRegister from './BussinesRegister';
import MapRegister from './RegisterMAP';
import Documents from './Documents';

 import { useForm } from 'react-hook-form';
 //import { yupResolver } from '@hookform/resolvers';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { FormChange } from '../../actions/persistenceActions';



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

export default function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  
  const dispatch = useDispatch();
  const form = useSelector(state => state.persistence.form);
  
  const schema = yup.object().shape({
    user: yup.object({
      firstname: yup.string().trim().required(() => <span>First name is required</span>),
      lastname: yup.string().trim().required(() => <span>Last name is required</span>),
    }),
  });

  const { register, handleSubmit, errors } = useForm({
   // resolver: yupResolver(schema),
    defaultValues: form,
  });

  const onSubmit = data => {
    // data.image = data.image[0];
    console.log(form);
    dispatch( FormChange(data) );
    handleNext();
  }

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <BussinesRegister />;
      case 1:
        return <MapRegister className="layout2"/>;
      case 2:
        return <Documents />;
      default:
        throw new Error('Unknown step');
    }
  }

  return (
    <React.Fragment>
      {
        console.log(form)
      }
      <CssBaseline />
      <form className={classes.layout} onSubmit={handleSubmit(onSubmit) } >
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h4" align="center">
              NUEVO REGISTRO
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
                {getStepContent(activeStep)}
                
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
              </React.Fragment>
            )}
          </React.Fragment>
        </Paper>  
      </form>
    </React.Fragment>
  );
}