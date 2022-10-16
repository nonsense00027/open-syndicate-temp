import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Section from "../components/Section";
import ValueItem from "../components/ValueItem";
import FundingIcon from "assets/images/landing/funding.png";
import ServicesIcon from "assets/images/landing/services.png";
import AdvisoryIcon from "assets/images/landing/advisory.png";
import ConnectionsIcon from "assets/images/landing/connections.png";

function Value() {
  return (
    <Section backgroundColor="#FFFFFF">
      <Box sx={{ opacity: "87%", maxWidth: "744px", margin: "0 auto" }}>
        <Typography fontSize={40} fontWeight="600" textAlign="center">
          Value
        </Typography>
        <Typography fontSize={15} fontWeight="400" textAlign="center" mb={2}>
          OpenSyndicate will be providing a platform that will allow every
          individual to strategically allocate their resources into projects or
          companies that they want to co-create.
        </Typography>
        <Typography fontSize={15} fontWeight="400" textAlign="center">
          OpenSyndicate will provide education and guidance to help community
          members to grow.
        </Typography>
      </Box>
      <Stack direction="row" mt={12} spacing={5}>
        <ValueItem
          icon={FundingIcon}
          title="Funding"
          description="At vero eos et accusamus et iusto odio dignissimos "
        />
        <ValueItem
          icon={ServicesIcon}
          title="Services"
          description="At vero eos et accusamus et iusto odio dignissimos "
        />
        <ValueItem
          icon={AdvisoryIcon}
          title="Advisory"
          description="At vero eos et accusamus et iusto odio dignissimos "
        />
        <ValueItem
          icon={ConnectionsIcon}
          title="Connections"
          description="At vero eos et accusamus et iusto odio dignissimos "
        />
      </Stack>
    </Section>
  );
}

export default Value;
