import React from "react";
import { Router } from "./router/Router";
import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";
import { ContainerBody } from "./styled";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContainerBody>
        <Router />
      </ContainerBody>
    </ThemeProvider>
  );
}

export default App;
