import React, { useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentStep } from "../redux/slices/formSlice";

const HelloScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCurrentStep(1));
  }, [dispatch]);

  return (
    <Container>
      <Box sx={{ textAlign: "start", my: "auto", py: 3 }}>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          marginTop={"2rem"}
        >
          <Grid item md={6} xs={12} textAlign={"end"}>
            <img
              src="survey.jpg"
              width={"100%"}
              style={{
                borderRadius: 15,
                boxShadow: "-1px 1px 13px 4px rgba(219,219,219,1)",
              }}
              alt=""
            />
          </Grid>
          <Grid item lg={6} xs={12}>
            <Typography
              variant="h4"
              sx={{ fontWeight: 600, color: "Highlight", my: 3 }}
            >
              Hello and Welcome to Our Survey App!
            </Typography>
            <Typography>
              Thank you for visiting our survey application! We are thrilled to
              have you here, and we hope you find our platform both engaging and
              insightful. We value your opinions and insights, and that's why we
              have created this survey. Your feedback is essential to help us
              understand your needs better and improve our services.
            </Typography>
            <Link to={"/survey"}>
              <Button
                variant="contained"
                sx={{ mt: 4, borderRadius: 15 }}
                color="info"
                size="large"
              >
                Start Now
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default HelloScreen;
