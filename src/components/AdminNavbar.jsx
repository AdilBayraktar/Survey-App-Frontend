import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { logoutUser } from "../redux/services/authApi";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ borderRadius: 20 }}
        variant="elevation"
        color="default"
      >
        <Toolbar>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box sx={{ flexGrow: 1 }}>
            <Link style={{ marginRight: 5 }} to={"/admin"}>
              Dashboard
            </Link>
            <Link style={{ marginLeft: 5 }} to={"/admin/responses"}>
              Responses
            </Link>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="p"
              component="p"
              sx={{
                flexGrow: 1,
                backgroundColor: "green",
                color: "white",
                p: 1,
                borderRadius: 5,
              }}
            >
              Welcome, {user.userName}
            </Typography>
            <Button color="inherit" onClick={() => dispatch(logoutUser())}>
              <LogoutIcon />
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default AdminNavbar;
