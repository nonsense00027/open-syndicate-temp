import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "configs/theme";
import Routes from "routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
