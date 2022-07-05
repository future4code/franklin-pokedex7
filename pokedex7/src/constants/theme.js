import { createTheme } from "@mui/material";
import { primaryColor, secundaryColor, neutralColor } from "./colors"

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: '#FCFCFC'
    },
    secundary: {
        main: secundaryColor,
        contrastText: '#F2CB05'
    },
    text: {
        primary: neutralColor
    }
  }
})

export default theme;