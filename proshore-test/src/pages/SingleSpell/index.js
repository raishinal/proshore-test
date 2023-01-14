import React from "react";
import Template from "../../template";
import { Container, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useLocation } from "react-router-dom";
import SpellDescription from "../../components/SpellDescription";
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: "5px",
}));

const ExpanedBox = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "left",
  color: theme.palette.text.secondary,
  padding: 20,
}));
const SpellTitle = styled(Typography)(({ theme }) => ({
  fontSize: 50,
  color: "#fdfdfe",
  textShadow:
    "0px 0px 5px #704cd9, 0px 0px 5px #704cd9, 0px 0px 5px #704cd9,0px 0px 20px #b393d3",
}));

const SingleSpell = (props) => {
  const location = useLocation();
  const { state } = location;
  return (
    <Template>
      <StyledContainer component="main" maxWidth="lg">
        <SpellTitle>{state.name}</SpellTitle>
        <ExpanedBox variant="outlined">
          <SpellDescription spell={state} />
        </ExpanedBox>
        ;
      </StyledContainer>
    </Template>
  );
};

export default SingleSpell;
