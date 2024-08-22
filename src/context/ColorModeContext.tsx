import { useMode } from "hooks/useMode";
import { createContext } from "react";
import { TColorContextProps } from "types/PropsTypes";
import { ThemeProvider } from '@mui/material/styles';
import { TColorModeContext } from "types/DataTypes";

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