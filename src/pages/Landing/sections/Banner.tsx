import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import BannerImg from "assets/images/landing/banner.png";
import BuildingIcon from "assets/images/landing/building.png";
import PigIcon from "assets/images/landing/pig.png";
import HandshakeIcon from "assets/images/landing/handshake.png";
import Section from "../components/Section";
import BannerCard from "../components/BannerCard";

function Banner() {
  return (
    <Section backgroundColor="#24253A">
      <Grid
        container
        columnSpacing={2}
        justifyContent="space-between"
        pt={10.6}
      >
        <Grid item xs={4}>
          <Stack direction="row" mt={7} mb={3}>
            <Typography color="primary" fontSize={48} fontWeight="700">
              Open
            </Typography>
            <Typography color="white" fontSize={48} fontWeight="700">
              Syndicate
            </Typography>
          </Stack>
          <Typography color="white" fontSize={24} fontWeight="500">
            Metaverse and Web3 Innovation for Social Impact
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Box display="flex" justifyContent="flex-end">
            <img src={BannerImg} alt="" />
          </Box>
        </Grid>
      </Grid>

      <Box mt={7}>
        <Stack direction="row" spacing={3}>
          <BannerCard
            icon={BuildingIcon}
            stats="$3M"
            title="Total Fund Raised"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"
          />
          <BannerCard
            icon={PigIcon}
            stats="60"
            title="Funded Projects"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"
          />
          <BannerCard
            icon={HandshakeIcon}
            stats="100"
            title="Advised Projects"
            description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"
          />
        </Stack>
      </Box>
    </Section>
  );
}

export default Banner;
