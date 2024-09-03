import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns } from "schema/tableSchema";
import { TUserTableProps } from "types/PropsTypes";

export const UserTable = (props: TUserTableProps) => {
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
        columns={userColumns}
      />
    </Box>
  );
};
