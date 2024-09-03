import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { clientColumns } from "schema/tableSchema";
import { TClientTableProps } from "types/PropsTypes";

export const ClientTable = (props: TClientTableProps) => {
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
        columns={clientColumns}
      />
    </Box>
  );
};
