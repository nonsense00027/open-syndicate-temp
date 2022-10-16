import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import OfferCard from "../components/OfferCard";
import Section from "../components/Section";
import ChipImg from "assets/images/landing/chip.png";

function Offer() {
  return (
    <Section backgroundColor="#24253A">
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        zIndex={5}
      >
        <img src={ChipImg} width="100%" height="100%" alt="" />
      </Box>
      <Box position="relative" zIndex={10}>
        <Box sx={{ opacity: "87%", maxWidth: "744px", margin: "0 auto" }}>
          <Typography
            color="white"
            fontSize={40}
            fontWeight="600"
            textAlign="center"
          >
            Our Offer
          </Typography>
          <Typography
            color="white"
            fontSize={15}
            fontWeight="400"
            textAlign="center"
            mb={2}
          >
            OpenSyndicate will be providing a platform that will allow every
            individual to strategically allocate their resources into projects
            or companies that they want to co-create.
          </Typography>
        </Box>
        <Grid container mt={5} columnSpacing={3}>
          <Grid item xs={8}>
            <Box
              height="100%"
              display="flex"
              flexDirection="column"
              justifyContent="flex-end"
              p={7}
              sx={{ backgroundColor: "#2F3044", borderRadius: "8px" }}
            >
              <Typography color="white" fontSize={40} fontWeight="600" mb={2}>
                Syndicate App
              </Typography>
              <Typography color="white" fontSize={24} fontWeight="500">
                Co-Funding Platform that allows individual investors to pool
                funds in the most effective and secure way.
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            container
            direction="column"
            columnSpacing={3}
            rowSpacing={3}
            xs={4}
          >
            <Grid item xs={6}>
              <OfferCard
                title="Startup Assistance"
                description=" Co-Funding Platform that allows individual investors to pool
              funds in the most effective and secure way."
              />
            </Grid>
            <Grid item xs={6}>
              <OfferCard
                title="Fund Matching"
                description=" Co-Funding Platform that allows individual investors to pool
              funds in the most effective and secure way."
              />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Section>
  );
}

export default Offer;
