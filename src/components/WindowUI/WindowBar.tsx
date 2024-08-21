import { Box, Button } from '@mui/material';
import { TWindowBarProps } from 'types/PropsTypes';
import AddIcon from '@mui/icons-material/Add';

export const WindowBar = (props : TWindowBarProps) => {

  const { onNewButtonClick } = props;

  return (
    <Box display={'flex'} flexDirection={'row-reverse'}>
        <Button variant='contained' startIcon={<AddIcon/>} onClick={onNewButtonClick}>
        Add New
        </Button>
    </Box>
  )
}
