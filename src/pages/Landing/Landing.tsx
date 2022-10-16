import { Box, Container } from "@mui/material";
import Navbar from "components/Navbar";
import React from "react";
import Banner from "./sections/Banner";
import Mission from "./sections/Mission";
import Offer from "./sections/Offer";
import Value from "./sections/Value";
import Why from "./sections/Why";

function Landing() {
  return (
    <Box>
      <Navbar />
      <Banner />
      <Mission />
      <Value />
      <Offer />
      <Why />
    </Box>
  );
}

export default Landing;
