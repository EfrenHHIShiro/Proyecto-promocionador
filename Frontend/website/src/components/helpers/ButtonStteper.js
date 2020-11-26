import React from "react";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));

export const StepButton = props => {
  const { activeStep } = props;
  const classes = useStyles();
  switch (activeStep) {
    case 0:
      return (
        <>
          <Button
            align="center"
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Continue
          </Button>
        </>
      );
    case 1:
      return (
        <>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className={classes.button}
          >
            Submit
          </Button>
        </>
      );
      case 3:
        return (
          <>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.button}
            >
              Submit
            </Button>
          </>
        );
    default:
      return <></>;
  }
};
