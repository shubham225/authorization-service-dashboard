import { initAppContext } from "constant/Initial";
import React from "react";
import { TAppContext, TAppContextType } from "types/DataTypes";
import { TAlertContextProps } from "types/PropsTypes";

export const AppContext = React.createContext<TAppContextType | null>(null);

const AppContextProvider = (props : TAlertContextProps) => {
    const [appContext, setAppContext] = React.useState<TAppContext>(initAppContext);

    const { children } = props;
    
    return(
        <AppContext.Provider value={{ appContext, setAppContext }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppContextProvider;