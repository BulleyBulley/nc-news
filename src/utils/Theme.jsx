import React from "react";
import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        light: '#ffffff',
        main: '#212121',
        dark: '#000000',
        contrastText: '#000',
      },
      secondary: {
        light: '#ffffff',
        main: '#e8eaf6',
        dark: '#b6b8c3',
        contrastText: '#000',
      },
    },
  });

export default theme