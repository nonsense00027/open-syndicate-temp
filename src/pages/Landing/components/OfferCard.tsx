import React from "react";
import { Box, Typography } from "@mui/material";

interface OfferCardProps {
  title: string;
  description: string;
}

function OfferCard(props: OfferCardProps) {
  const { title, description } = props;

  return (
    <Box
      px={3}
      pt={7}
      pb={4}
      sx={{ backgroundColor: "#2F3044", borderRadius: "8px" }}
    >
      <Typography color="white" fontSize={24} fontWeight="600" mb={2}>
        {title}
      </Typography>
      <Typography color="white" fontSize={16} fontWeight="400">
        {description}
      </Typography>
    </Box>
  );
}

export default OfferCard;
