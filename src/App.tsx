import { RouterProvider } from "react-router-dom";
import { Router } from "./pages/Router";
import CssBaseline from "@mui/material/CssBaseline";
import AppContextProvider from "context/AppContext";
import ColorModeContextProvider from "context/ColorModeContext";

function App() {
  return (
    <ColorModeContextProvider>
      <AppContextProvider>
        <CssBaseline />
        <div className="app">
          <RouterProvider router={Router} />
        </div>
      </AppContextProvider>
    </ColorModeContextProvider>
  );
}

export default App;
