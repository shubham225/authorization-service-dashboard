import { createTheme } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { themeSettings } from "theme";
import { TcolorMode, TColorModeContext } from "types/DataTypes";

export const useMode = () => {
  const [mode, setMode] = useState<TcolorMode>("light");

  const colorMode : TColorModeContext = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    []
  );

  const theme = createTheme(themeSettings(mode));

  return {theme, colorMode};
};
