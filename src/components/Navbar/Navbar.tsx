import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

const paths = [
  { name: "Home", path: "1" },
  { name: "About", path: "2" },
  { name: "Community", path: "3" },
  { name: "How it Works", path: "4" },
];

function Navbar() {
  return (
    <Box zIndex={999} py={3.5} sx={{ backgroundColor: "#242539" }}>
      <Container>
        <Stack direction="row" spacing={4} justifyContent="flex-end">
          {paths.map(({ name, path }) => (
            <Typography
              key={path}
              color="white"
              fontSize={12}
              fontWeight="500"
              sx={{ cursor: "pointer" }}
            >
              {name}
            </Typography>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}

export default Navbar;
