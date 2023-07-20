import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getQuestionById, updateQuestion } from "../redux/services/dataApi";
import { ToastContainer } from "react-toastify";

const QuestionDetails = () => {
  const dispatch = useDispatch();
  const dataList = useSelector((state) => state.data);
  const { id } = useParams();
  const currentRecord = dataList?.dataList?.filter((item) => item._id == id);

  console.log(id);

  const submitUpdateQuestionForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    dispatch(
      updateQuestion(
        {
          questionText: formData.get("questionText"),
          answersList: [
            formData.get("answer1"),
            formData.get("answer2"),
            formData.get("answer3"),
          ],
        },
        id
      )
    );
  };

  useEffect(() => {
    dispatch(getQuestionById(id));
  }, [dispatch]);

  return (
    <Container sx={{ my: "3rem" }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 500 }} color={"green"}>
        Updata Question
      </Typography>
      <Box component={Paper} sx={{ p: 3, borderRadius: 5 }}>
        <Grid
          component={"form"}
          onSubmit={submitUpdateQuestionForm}
          container
          sx={{ my: 3, mx: "auto", maxWidth: "85%" }}
          spacing={3}
        >
          <Grid item xs={12} sm={12}>
            <TextField
              required
              id="questionText"
              name="questionText"
              label="Question Text"
              fullWidth
              defaultValue={currentRecord[0]?.questionText}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="answer1"
              name="answer1"
              label="Answer 1"
              defaultValue={currentRecord[0]?.answersList[0]}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="answer2"
              name="answer2"
              label="Answer 2"
              defaultValue={currentRecord[0]?.answersList[1]}
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="answer3"
              name="answer3"
              label="Answer 3"
              defaultValue={currentRecord[0]?.answersList[2]}
              fullWidth
              variant="outlined"
            />
          </Grid>

          <Grid item md={12} xs={12} sm={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 2 }}
            >
              Update
            </Button>
          </Grid>
          <Grid item md={12} xs={12} sm={12}>
            <Link to="/admin">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mb: 3 }}
              >
                Back
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
      <ToastContainer />
    </Container>
  );
};

export default QuestionDetails;
