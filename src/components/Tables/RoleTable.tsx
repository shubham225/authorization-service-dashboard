import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { roleColumns } from "schema/tableSchema";
import { TRoleTableProps } from "types/PropsTypes";

export const RoleTable = (props: TRoleTableProps) => {
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
        columns={roleColumns}
      />
    </Box>
  );
};
