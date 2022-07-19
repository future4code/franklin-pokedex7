import React, { useState } from "react";
import { Router } from "./router/Router";
import { ThemeProvider } from "@mui/material";
import theme from "./constants/theme";
import { ContainerBody } from "./styled";
import { ContextPokedex } from "./contexts/ContextPokedex";

function App() {
  const [pokedex, setPokedex] = useState([]);
  return (
    <ThemeProvider theme={theme}>
      <ContextPokedex.Provider value={{pokedex, setPokedex}}>
        <ContainerBody>
          <Router />
        </ContainerBody>
      </ContextPokedex.Provider>
    </ThemeProvider>
  );
}

export default App;
