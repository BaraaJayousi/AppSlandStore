'use client';
import { createTheme } from "@mui/material";

const lightTheme = createTheme({
  cssVariables: true,
  palette: {
    background: {
      default: '#f1f1f1',
    },
  },
});

export default lightTheme;