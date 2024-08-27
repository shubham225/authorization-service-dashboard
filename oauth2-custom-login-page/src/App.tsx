import CssBaseline from '@mui/material/CssBaseline';
import { Login } from './pages/Login';
import ColorModeContextProvider from './context/ColorModeContext';
import Appbar from './components/AppBar';

function App() {
  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <div className="app">
        <Appbar />
        <Login /> 
      </div>
    </ColorModeContextProvider>
  );
}

export default App;
