import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { Router } from './pages/Router';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { alpha, Box } from '@mui/material';

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Box component="main" 
        sx={(theme) => ({
          // backgroundImage:
          //   theme.palette.mode === 'light'
          //     ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
          //     : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
          backgroundSize: '100% 20%',
          backgroundRepeat: 'no-repeat',
          height: '100vh'
        })}> 
          <CssBaseline />
          <RouterProvider router={Router} />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;