import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setAnswer3, setCurrentStep } from "../redux/slices/formSlice";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";

const StepThree = ({ randomData }) => {
  const dispatch = useDispatch();
  const [answer, setAnswer] = useState("");
  const slicedData = randomData[2];

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      setAnswer3({ questionText: slicedData.questionText, answer: answer })
    );
    dispatch(setCurrentStep(4));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <FormControl key={slicedData?.question_id} sx={{ mt: "3rem" }}>
          <FormLabel id="demo-radio-buttons-group-label">
            {slicedData?.questionText}
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
            value={answer}
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
          <Grid item xs={6} textAlign={"start"}>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              sx={{ width: "100%" }}
              onClick={() => dispatch(setCurrentStep(2))}
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={6} textAlign={"end"}>
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

export default StepThree;
