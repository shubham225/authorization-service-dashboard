import { Delete, Edit } from '@mui/icons-material';
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import { type TScopeTableProps } from 'types/PropsTypes';


export const ScopeTable = (props : TScopeTableProps) => {
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
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                    <TableCell component="th" scope="row">{row.id}</TableCell>
                    <TableCell >{row.scope}</TableCell>
                    <TableCell > {row.description} </TableCell>
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
