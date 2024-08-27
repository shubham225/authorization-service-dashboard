import { createContext } from "react";
import { ThemeProvider } from '@mui/material/styles';
import { TColorContextProps, TColorModeContext } from "../types/Datatypes";
import { useMode } from "../hooks/useMode";

export const ColorModeContext = createContext<TColorModeContext>({
	toggleColorMode: () => {},
});

const ColorModeContextProvider = (props : TColorContextProps) => {
    const {theme, colorMode} = useMode();

    const { children } = props;
    
    return(
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default ColorModeContextProvider;