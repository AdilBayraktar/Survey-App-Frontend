import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/services/authApi";
import { ToastContainer } from "react-toastify";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const submitLoginFormHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    dispatch(
      loginUser({
        userName: formData.get("userName"),
        password: formData.get("password"),
      })
    );
    if (user) {
      setTimeout(() => navigate("/admin"), 1000);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="my-20">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "",
            boxShadow: "-1px 1px 13px 4px rgba(219,219,219,1)",
            borderRadius: 5,
            p: 5,
          }}
        >
          <Typography
            component="p"
            variant="p"
            sx={{ fontSize: "14px", textAlign: "center", my: "1rem" }}
          >
            Welcome To Survey App Admin Dashboard, Please Login To Access Your
            Dashboard
          </Typography>
          <Typography component="h3" variant="h3" color={"Highlight"}>
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={submitLoginFormHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="userName"
              label="User Name"
              type="text"
              name="userName"
              autoComplete="userName"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
              autoComplete="password"
            />
            <Button
              type="submit"
              // disabled={!password || !userName}
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Login;
