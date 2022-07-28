import React from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, createTheme } from '@material-ui/core';

import App from './App';

const theme = createTheme({
  overrides: {
    MuiIconButton: {
      root: {
        '&:hover': {
          backgroundColor: 'red',
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#61dafb',
    },
    secondary: {
      main: '#00ff00',
    },
  },
});

const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
