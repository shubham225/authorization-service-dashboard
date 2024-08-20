import { Box, Button } from '@mui/material'
import { TWindowBarProps } from 'types/PropsTypes'

export const WindowBar = (props : TWindowBarProps) => {

  const { onNewButtonClick } = props;

  return (
    <Box display={'flex'} flexDirection={'row-reverse'}>
        <Button variant='outlined' onClick={onNewButtonClick}>
        Add New
        </Button>
    </Box>
  )
}
