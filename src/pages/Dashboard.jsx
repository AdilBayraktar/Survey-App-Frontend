import { Container, Typography } from "@mui/material";
import React from "react";
import QuestionsTable from "../components/QuestionsTable";
import { ToastContainer } from "react-toastify";

const Dashboard = () => {
  return (
    <Container sx={{ my: "3rem" }}>
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 500 }} color={"green"}>
        All Questions
      </Typography>
      <QuestionsTable />
      <ToastContainer />
    </Container>
  );
};

export default Dashboard;
