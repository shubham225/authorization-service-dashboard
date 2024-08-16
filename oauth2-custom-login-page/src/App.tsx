import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import './App.css';
import { Login } from './pages/Login';

const defaultTheme = createTheme();

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
      <Box component="main" 
        sx={(theme) => ({
          backgroundSize: '100% 20%',
          backgroundRepeat: 'no-repeat',
          height: '100vh'
        })}>
          <CssBaseline />
          <Login />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
