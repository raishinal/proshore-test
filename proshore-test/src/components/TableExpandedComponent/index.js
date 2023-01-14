import React from "react";
import { Box, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import SpellDescription from "../SpellDescription";
const ExpanedBox = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary,
  padding: 20,
}));

const SpellButton = styled(Button)(({ theme }) => ({
  fontSize: 12,
  fontWeight: "normal",
  textDecoration: "none",
  color: "#704cd9",
}));
const ExpandedComponent = ({ data }) => {
  const navigate = useNavigate();
  return (
    <ExpanedBox variant="outlined">
      <SpellDescription spell={data} />
      <Box style={{ margin: "10px 0" }}>
        <SpellButton
          variant="outlined"
          onClick={() => handleSpellNavigate(navigate, data)}
        >
          Show Details
        </SpellButton>
      </Box>
    </ExpanedBox>
  );
};

const handleSpellNavigate = (navigate, data) => {
  navigate("/spell/" + data.index, { state: data });
};

export default ExpandedComponent;
