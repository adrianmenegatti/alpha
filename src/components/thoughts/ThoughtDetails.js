import React from "react";

import { Container, Box, BoxTitle, BoxText } from "./ThoughtsStyles";

export default function ThoughtDetails({ thought, back }) {
    return (
      <Container>
        <Box key={thought.id} onClick={() => back()}>
            <BoxTitle>{thought.title}</BoxTitle>
            <BoxText>{thought.date}</BoxText>
            <Box>
                <BoxTitle>{thought.description}</BoxTitle>
                <BoxText>{thought.mood}</BoxText>
            </Box>
        </Box>
      </Container>
    );
  }