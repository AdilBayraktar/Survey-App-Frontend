import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnswer1,
  setAnswer2,
  setAnswer3,
  setCurrentStep,
} from "../redux/slices/formSlice";
import { sendResponse } from "../redux/services/dataApi";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const LastStep = () => {
  const form = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const dataList = [];
  if (form.answer1 && form.answer2 && form.answer3) {
    dataList.push(form.answer1, form.answer2, form.answer3);
  }

  const submitData = () => {
    dispatch(sendResponse({ answers: dataList }));
    swal({
      title: "Thank You!",
      buttons: true,
    }).then(() => navigate("/"));
  };

  // dispatch(sendResponse());
  return (
    <Box sx={{ my: 5, textAlign: "center" }}>
      <Typography variant="h4">Thank You For Your Time</Typography>
      <Typography variant="body1">
        Below You will find your answers, you can edit them or send your
        response!
      </Typography>
      <Box
        sx={{
          my: 3,
          p: 3,
          textAlign: "start",
          borderRadius: 5,
          backgroundColor: "#dfebea",
          width: "80%",
          mx: "auto",
        }}
        component={Paper}
      >
        <Box sx={{ my: 2 }}>
          <Typography variant="subtitle1" color={"gray"}>
            {form.answer1.questionText}
          </Typography>
          <Typography variant="body1" color={"green"}>
            {form.answer1.answer}
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="subtitle1" color={"gray"}>
            {form.answer2.questionText}
          </Typography>
          <Typography variant="body1" color={"green"}>
            {form.answer2.answer}
          </Typography>
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography variant="subtitle1" color={"gray"}>
            {form.answer3.questionText}
          </Typography>
          <Typography variant="body1" color={"green"}>
            {form.answer3.answer}
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        marginTop={"2rem"}
      >
        <Grid item md={6} xs={12} textAlign={"start"}>
          <Button
            variant="contained"
            color="secondary"
            sx={{ width: "100%" }}
            onClick={() => dispatch(setCurrentStep(3))}
          >
            Previous
          </Button>
        </Grid>
        <Grid item md={6} xs={12} textAlign={"end"}>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "100%" }}
            onClick={() => submitData()}
          >
            Send Response
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LastStep;
