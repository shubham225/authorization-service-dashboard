import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Chip from "@mui/material/Chip";
import { TMultiSelectProps } from "types/PropsTypes";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName?: readonly string[], theme?: Theme) {
  return {
    fontWeight:
      personName?.indexOf(name) === -1
        ? theme?.typography.fontWeightRegular
        : theme?.typography.fontWeightMedium,
  };
}

const MultipleSelect = (props: TMultiSelectProps) => {
  const theme = useTheme();

  const {
    id,
    name,
    value,
    onChange,
    onBlur,
    error,
    label,
    margin,
    enums,
  } = props;

  return (
    <div>
      <FormControl fullWidth margin={margin}>
        <InputLabel >{label}</InputLabel>
        <Select
          id={id}
          multiple
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          error={error}
          input={<OutlinedInput label={label} />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {enums.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, value, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleSelect;
