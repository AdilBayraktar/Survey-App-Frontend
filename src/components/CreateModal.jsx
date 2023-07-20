import { Box, Modal, Typography, Grid, TextField, Button } from "@mui/material";
import React from "react";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { createQuestion, getAllQuestions } from "../redux/services/dataApi";

const style = {
  position: "absolute",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const CreateModal = ({ open, handleClose }) => {
  const { isLoadingCreate } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const submitCreateQuestionForm = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    dispatch(
      createQuestion({
        questionText: formData.get("questionText"),
        answersList: [
          formData.get("answer1"),
          formData.get("answer2"),
          formData.get("answer3"),
        ],
      })
    );
    dispatch(getAllQuestions());
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Create a New Question
        </Typography>
        <Grid
          component={"form"}
          onSubmit={submitCreateQuestionForm}
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
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="answer1"
              name="answer1"
              label="Answer 1"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="answer2"
              name="answer2"
              label="Answer 2"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="answer3"
              name="answer3"
              label="Answer 3"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 3, mb: 2 }}
              disabled={isLoadingCreate}
            >
              {isLoadingCreate ? (
                <ThreeDots height="20" width="20" color="#7B1FA2" />
              ) : (
                "Create"
              )}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
};

export default CreateModal;
