import { Stack, Typography } from "@mui/material";
import React from "react";

interface ValueItemProps {
  icon: string;
  title: string;
  description: string;
}

function ValueItem(props: ValueItemProps) {
  const { icon, title, description } = props;

  return (
    <Stack alignItems="center" px={2}>
      <img src={icon} height={64} style={{ objectFit: "contain" }} alt="" />
      <Typography
        mt={4}
        mb={2}
        fontSize={20}
        fontWeight="600"
        textAlign="center"
      >
        {title}
      </Typography>
      <Typography fontSize={15} fontWeight="400" textAlign="center">
        {description}
      </Typography>
    </Stack>
  );
}

export default ValueItem;
