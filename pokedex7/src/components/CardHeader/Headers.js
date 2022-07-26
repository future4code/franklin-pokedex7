import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { StyledButton, StyledTypography, StyledToolbar } from './styled';
import { Avatar } from '@mui/material';

const Headers = (props) => {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <StyledToolbar>

          
          <StyledButton
            color="inherit"
            startIcon={<Avatar src={props.image} />}  
            onClick={props.onClick}
            >
            {props.botao}
          </StyledButton> 

          
          <StyledTypography variant="p" component="div" sx={{ flexGrow: 1 }}>
          {props.titulo}
          </StyledTypography>

          
          <StyledButton
            color="inherit"
            endIcon={<Avatar src={props.imageRight} />}  
            onClick={props.onClickRightButton}
            
            >
            {props.botaoDir}
          </StyledButton> 

        </StyledToolbar>
      </AppBar>
    </Box>
  );
}

export default Headers;
