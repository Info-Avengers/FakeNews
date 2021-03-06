import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import OffendingAccount from "./OffendingAccount";
import IncidentOverview from "./IncidentOverview";
import Review from "./Review";
import { v4 as uuidv4 } from "uuid";

import Amplify, { API } from "aws-amplify";
import awsExports from "../aws-exports";
Amplify.configure(awsExports);

function Copyright() {
  const classes = useStyles();
  return (
    <Typography
      variant="body2"
      color="textSecondary"
      align="center"
      className={classes.paper}
    >
      disinformation.exposed
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(700 + theme.spacing(2) * 2)]: {
      width: 500,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(800 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Wizard() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [profileUrl, setProfileUrl] = React.useState("");
  const [overview, setOverview] = React.useState("");
  const [imageKeys, setImageKeys] = React.useState([]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    if (activeStep == 2) {
      postData();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  async function postData() {
    const apiName = "api814905b4";
    const path = "/tips";
    const myInit = {
      body: { id: uuidv4(), profileUrl, overview, imageKeys },
      headers: {},
    };

    return await API.post(apiName, path, myInit);
  }

  const steps = ["Account", "Overview", "Evidence"];

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <OffendingAccount setProfileUrl={setProfileUrl} />;
      case 1:
        return <IncidentOverview setOverview={setOverview} />;
      case 2:
        return <Review setImageKeys={setImageKeys} />;
      default:
        throw new Error("Unknown step");
    }
  }

  return (
    <React.Fragment>
      <main className={classes.layout}>
        <Typography component="h1" variant="h4" align="center">
          file a report
        </Typography>
        <Stepper activeStep={activeStep} className={classes.stepper}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <React.Fragment>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your report.
              </Typography>
              <Typography variant="subtitle1">
                Your effort is greatly appreciated.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} className={classes.button}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? "Submit" : "Next"}
                </Button>
              </div>
            </React.Fragment>
          )}
        </React.Fragment>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
