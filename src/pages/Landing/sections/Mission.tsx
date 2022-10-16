import React from "react";
import Section from "../components/Section";
import MissionImg from "assets/images/landing/mission.png";
import { Box, Stack, Typography } from "@mui/material";

function Mission() {
  return (
    <Section backgroundColor="#181929">
      <Stack direction="row" alignItems="center" spacing={14} py={5} px={13}>
        <img
          src={MissionImg}
          alt=""
          width={406}
          style={{ objectFit: "contain" }}
        />
        <Box>
          <Typography color="white" fontSize={40} fontWeight="600" mb={3}>
            Our Mission
          </Typography>
          <Typography color="white" fontWeight="400">
            Reduce the friction of collaborative resource sharing such as
            Funding, Talents, Domain Expertise, Services, and other forms of
            resources that could help build a company to move forward.
          </Typography>
          <Typography
            color="white"
            fontSize={40}
            fontWeight="600"
            mt={7}
            mb={3}
          >
            Our Vision
          </Typography>
          <Typography color="white" fontWeight="400">
            Enable every person in this world to support and share resources
            that will allow them to co-create successful companies that aligns
            the core value of every individual.
          </Typography>
        </Box>
      </Stack>
    </Section>
  );
}

export default Mission;
