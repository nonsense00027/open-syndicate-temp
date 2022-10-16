import { Box, Container } from "@mui/material";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  backgroundColor: string;
}

function Section(props: SectionProps) {
  const { children, backgroundColor } = props;

  return (
    <Box position="relative" py={9} sx={{ backgroundColor }}>
      <Container>{children}</Container>
    </Box>
  );
}

export default Section;
