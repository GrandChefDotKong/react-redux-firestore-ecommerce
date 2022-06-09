import React from "react";
import { Stepper, Step, StepLabel, Typography, Container, Button } from "@material-ui/core";
import Delivery from "./Delivery";
import Recap from "./Recap";
import Payment from "./Payment";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { placeOrder } from "../../store/actions/ordersActions";

function getSteps() {
  return ["お届けを選択", "お支払い方法を選択", "ご注文内容を確認"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Delivery />;
    case 1:
      return <Payment />;
    case 2:
      return <Recap />;
    default:
      return "Unknown step";
  }
}

const Validate = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const handleNext = () => {
    let newSkipped = skipped;

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  if (!props.auth.uid) return <Redirect to="/signin" />;

  return (
    <div className="page-container">
      <Container maxWidth="md">
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
                <Recap />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() =>
                    props.placeOrder(props.cartContent, props.auth.uid)
                  }
                >
                  注文を確認する
                </Button>
            </div>
          ) : (
            <div>
              <Typography>{getStepContent(activeStep)}</Typography>
              <div>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  戻る
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "続行" : "次へ"}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    cartContent: state.orders.cartContent,
    delivery: state.orders.delivery,
    payment: state.orders.payment
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    placeOrder: (order, userId) => dispatch(placeOrder(order, userId))
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: "orders"
    }
  ])
)(Validate);
