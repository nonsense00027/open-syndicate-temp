import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";

interface BannerCardProps {
  icon: string;
  stats: string;
  title: string;
  description: string;
}

function BannerCard(props: BannerCardProps) {
  const { icon, stats, title, description } = props;

  return (
    <Box
      height="100%"
      p={3}
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        borderRadius: "8px",
      }}
    >
      <Stack direction="row" spacing={2.5} mb={3}>
        <img src={icon} height={46} style={{ objectFit: "contain" }} alt="" />
        <Typography color="white" fontSize={32} fontWeight="600">
          {stats}+
        </Typography>
      </Stack>
      <Typography color="white" fontSize={20} fontWeight="500" mb={2}>
        {title}
      </Typography>

      <Divider sx={{ border: "1px solid rgba(236, 236, 236, 0.2)" }} />

      <Typography
        color="white"
        fontSize={14}
        fontWeight="400"
        mt={2}
        sx={{ opacity: "60%" }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default BannerCard;
