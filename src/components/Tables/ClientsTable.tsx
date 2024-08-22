import { Delete, Edit } from '@mui/icons-material';
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import { TClientTableProps } from 'types/PropsTypes';


export const ClientTable = (props : TClientTableProps) => {
  const { data } = props;

  return (
    <>
    <TableContainer component={Paper} sx={{ minWidth: 500, maxHeight: 630, overflow: 'auto' }}>
        <Table stickyHeader >
            <TableHead>
            <TableRow>
                <TableCell >ID</TableCell>
                <TableCell >Scope</TableCell>
                <TableCell >Description</TableCell>
                <TableCell align="right">Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row) => (
                    <TableRow
                    key={row.client_id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">{row.client_id}</TableCell>
                    <TableCell >{row.client_name}</TableCell>
                    <TableCell > {row.client_authentication_methods} </TableCell>
                    <TableCell align="right"> 
                        <Box>
                            <Tooltip title="Edit Record">
                                <IconButton onClick={(e) => {e.preventDefault(); console.log('edit clicked')}} >
                                    <Edit />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Delete Record">
                                <IconButton onClick={(e) => console.log('delete clicked')} >
                                    <Delete />
                                </IconButton>
                            </Tooltip>
                        </Box>
                    </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
    </>
  )
}
