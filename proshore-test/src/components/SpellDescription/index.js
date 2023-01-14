import React from "react";
import { Box, Grid, Typography, Stack, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.primary,
}));

const HeadLabel = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: "bolder",
}));

const ValueLabel = styled(Typography)(({ theme }) => ({
  fontSize: 14,
}));

const DescriptionValue = styled(Typography)(({ theme }) => ({
  fontSize: 14,
}));

const HigherLevelLabel = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: "bold",
}));

const ClassesLabel = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: "normal",
}));

const SpellDescription = (props) => {
  const data = props.spell;
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            <HeadLabel>LEVEL</HeadLabel>
            <ValueLabel>{ordinal_suffix_of(data.level)}</ValueLabel>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <HeadLabel>CASTING TIME</HeadLabel>
            <ValueLabel>{data.casting_time || "None"}</ValueLabel>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <HeadLabel>RANGE/AREA</HeadLabel>
            <ValueLabel>{data.range || "None"}</ValueLabel>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <HeadLabel>COMPONENTS</HeadLabel>
            <ValueLabel>{data.components?.join()}</ValueLabel>
          </Item>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Item>
            <HeadLabel>DURATION</HeadLabel>
            <ValueLabel>
              {data.level && ordinal_suffix_of(data.level)}
            </ValueLabel>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <HeadLabel>SCHOOL</HeadLabel>
            <ValueLabel>{data.school?.name || "None"}</ValueLabel>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <HeadLabel>ATTACK TYPE</HeadLabel>
            <ValueLabel>{data.attack_type || "None"}</ValueLabel>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
            <HeadLabel>DAMAGE/EFFECT</HeadLabel>
            <ValueLabel>{data.damage?.damage_type?.name || "None"}</ValueLabel>
          </Item>
        </Grid>
      </Grid>
      <hr style={{ backgroundColor: "#704cd9", height: "3px" }} />

      {data.desc &&
        data.desc.map((desc, idx) => {
          return (
            <Box key={data.index + "desc-" + idx}>
              <DescriptionValue>{desc}</DescriptionValue>
              <br />
            </Box>
          );
        })}

      {data.higher_level && (
        <>
          <HigherLevelLabel>
            At Higher Levels:{" "}
            {data.higher_level.map((desc, idx) => {
              return (
                <span
                  key={data.index + "higherlevel-" + idx}
                  style={{ fontSize: 12, fontWeight: "normal" }}
                >
                  {desc}
                </span>
              );
            })}{" "}
          </HigherLevelLabel>
        </>
      )}
      <Stack alignItems="center" direction="row" spacing={1}>
        <ClassesLabel>Classes:</ClassesLabel>
        {data.classes &&
          data.classes.map((spellClass, idx) => {
            return (
              <Chip
                key={data.index + "spellclasses-" + idx}
                label={spellClass.name}
                variant="outlined"
              />
            );
          })}
      </Stack>
    </>
  );
};

function ordinal_suffix_of(i) {
  var j = i % 10,
    k = i % 100;
  if (j === 1 && k !== 11) {
    return i + "st";
  }
  if (j === 2 && k !== 12) {
    return i + "nd";
  }
  if (j === 3 && k !== 13) {
    return i + "rd";
  }
  return i + "th";
}

export default SpellDescription;
