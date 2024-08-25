import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React from 'react';
import { clientColumns, scopeColumns } from 'schema/tableSchema';
import { TClientTableProps, type TScopeTableProps } from 'types/PropsTypes';


export const ClientTable = (props : TClientTableProps) => {
  const { data } = props;

  return (
    <Box height="75vh" width={"82vw"}>
        <DataGrid 
          initialState={{
            pagination: { paginationModel: { pageSize: 10 } },
          }}
          getRowId={(row) => row.client_id}
          disableRowSelectionOnClick
          pageSizeOptions={[10, 20]} rows={data} columns={clientColumns} />
    </Box>
  )
}
