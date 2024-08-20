import { Delete, Edit } from '@mui/icons-material';
import { Box, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tooltip } from '@mui/material';
import { ClientDialog } from '../Dialog/ClientDialog';

const data = [
    {
      id : 111,
      scope: 'client.write',
      description: 'Client with write permission'
    },
    {
      id : 222,
      scope: 'client.read',
      description: 'Client with read permission'
    }
  ]
  
export const ClientTable = () => {
  return (
    <>
    <TableContainer component={Paper} sx={{ minWidth: 500, maxHeight: 350, overflow: 'auto' }}>
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
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={100}
        rowsPerPage={10}
        page={1}
        onPageChange={()=> console.log("page change")}
        onRowsPerPageChange={()=> console.log("rows per page")}
      />
    </>
  )
}
