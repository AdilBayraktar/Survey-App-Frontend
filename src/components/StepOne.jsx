import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setAnswer1, setCurrentStep } from "../redux/slices/formSlice";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import Aos from "aos";

const StepOne = ({ randomData }) => {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const slicedData = randomData[0];

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setAnswer1({ questionText: slicedData.questionText, answer: answer })
    );
    dispatch(setCurrentStep(2));
  };
  useEffect(() => {
    Aos.init({ duration: 2500 });
  }, []);

  return (
    <div data-aos="fade-right">
      <form onSubmit={onSubmit}>
        <FormControl key={slicedData?._id} sx={{ mt: "3rem" }}>
          <FormLabel id="demo-radio-buttons-group-label">
            {slicedData?.questionText}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue={answer}
            value={answer}
            name="radio-buttons-group"
            onChange={(e) => setAnswer(e.target.value)}
          >
            <FormControlLabel
              value={slicedData?.answersList[0]}
              control={<Radio />}
              label={slicedData?.answersList[0]}
            />
            <FormControlLabel
              value={slicedData?.answersList[1]}
              control={<Radio />}
              label={slicedData?.answersList[1]}
            />
            <FormControlLabel
              value={slicedData?.answersList[2]}
              control={<Radio />}
              label={slicedData?.answersList[2]}
            />
          </RadioGroup>
        </FormControl>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          marginTop={"2rem"}
        >
          <Grid item xs={6} textAlign={"start"}></Grid>
          <Grid item xs={12} textAlign={"end"}>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              color="primary"
              type="submit"
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default StepOne;
