import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { scopeColumns } from "schema/tableSchema";
import { type TScopeTableProps } from "types/PropsTypes";

export const ScopeTable = (props: TScopeTableProps) => {
  const { data } = props;

  return (
    <Box height="75vh">
      <DataGrid
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        disableRowSelectionOnClick
        pageSizeOptions={[10, 20]}
        rows={data}
        columns={scopeColumns}
      />
    </Box>
  );
};
