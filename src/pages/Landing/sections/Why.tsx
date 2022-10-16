import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Section from "../components/Section";
import VennImg from "assets/images/landing/venn.png";

function Why() {
  return (
    <Section backgroundColor="#181929">
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        py={10}
      >
        <Box>
          <Typography color="white" fontSize={40} fontWeight="600" mb={3}>
            Why us?
          </Typography>
          <Typography
            color="white"
            fontSize={15}
            fontWeight="400"
            maxWidth={500}
          >
            OpenSyndicate is backed and built by seasoned Entrepreneurs, Angel
            Investors, Venture Capital, Developers, Industry Experts that have
            experienced different problems in their respective industries. This
            gives OpenSyndicate a good position to have a Holistic perspective
            to solve and build the platform with the experiences.
          </Typography>
        </Box>
        <Box>
          <img src={VennImg} alt="" />
        </Box>
      </Stack>
    </Section>
  );
}

export default Why;
