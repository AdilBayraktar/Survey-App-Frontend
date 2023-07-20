import { Box, Container, Paper, Step, StepLabel, Stepper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";
import { useEffect, useState } from "react";
import { getRandomData } from "../redux/services/dataApi";
import { ToastContainer } from "react-toastify";
import LastStep from "../components/LastStep";
import Aos from "aos";

const Survey = () => {
  const currentStep = useSelector((state) => state.form.currentStep);
  const { randomData } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const [randomList, setRandomList] = useState();
  const isStepActive = (currentStep) => {
    switch (currentStep) {
      case 1:
        return <StepOne randomData={randomData} />;
      case 2:
        return <StepTwo randomData={randomData} />;
      case 3:
        return <StepThree randomData={randomData} />;
      case 4:
        return <LastStep />;
      default:
        break;
    }
  };

  useEffect(() => {
    dispatch(getRandomData());
    setRandomList(randomData);
    Aos.init({ duration: 2500 });
  }, []);
  return (
    <Container
      data-aos="fade-right"
      style={{
        width: "85%",
        padding: "3rem",
        margin: "2rem auto",
        borderRadius: "18px",
      }}
      component={Paper}
    >
      <Stepper activeStep={currentStep - 1} orientation="horizontal">
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
        <Step>
          <StepLabel></StepLabel>
        </Step>
      </Stepper>
      <Box>{isStepActive(currentStep)}</Box>
      <ToastContainer />
    </Container>
  );
};

export default Survey;
