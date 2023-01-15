import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";

// css *required

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: 16,
  color: "#000",
}));

export default function PrimarySearchAppBar() {
  return (
    <Box>
      <AppBar position="static" color="transparent" className="navbar">
        <Toolbar>
          <StyledLink to="/">Spell List App</StyledLink>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}></Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
