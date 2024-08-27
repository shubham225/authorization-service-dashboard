import { Popover, type PopoverProps } from '@mui/material';

export const PopoverWithArrow = (popoverProps: Omit<PopoverProps, 'anchorOrigin' | 'transformOrigin'>) => (
  <Popover
    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    transformOrigin={{ horizontal: 'right', vertical: -5 }}
    slotProps={{
      paper: {
        sx: {
          overflow: 'visible',
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          '&:before': {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      },
    }}
    {...popoverProps}
  />
);