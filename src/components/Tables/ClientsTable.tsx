import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import ClientGeneratedDialog from "components/Dialog/ClientGeneratedDialog";
import { initClient } from "constant/Initial";
import { useAlert } from "hooks/useAlert";
import { useState } from "react";
import { clientColumns } from "schema/tableSchema";
import { regenerateClientSecret } from "services/ClientService";
import { TClient } from "types/DataTypes";
import { TClientTableProps } from "types/PropsTypes";

export const ClientTable = (props: TClientTableProps) => {
  const { data } = props;
  const [newSecretGenerated, setNewSecretGenerated] = useState<boolean>(false);
  const [client, setClient] = useState<TClient>({
    ...initClient,
    id: "",
  });
  const { showAlert } = useAlert();

  let columns = clientColumns;

  columns = [
    ...columns,
    {
      field: "action",
      headerName: "Action",
      minWidth: 250,
      renderCell: (params: any) => (
        <Button
          variant="contained"
          onClick={(e) => handleGenerateSecret(e, params)}
        >
          Re-Generate Secret
        </Button>
      ),
    },
  ];

  const regenerateSecretAsync = async (value: string) => {
    try {
      let clientResp = await regenerateClientSecret(value);
      setClient(clientResp);
      setNewSecretGenerated(true);
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };

  const handleGenerateSecret = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    params: any
  ) => {
    e.preventDefault();
    regenerateSecretAsync(params.row.clientId);
  };

  return (
    <Box height="75vh">
      <DataGrid
        initialState={{
          pagination: { paginationModel: { pageSize: 10 } },
        }}
        disableRowSelectionOnClick
        pageSizeOptions={[10, 20]}
        rows={data}
        columns={columns}
      />
      <ClientGeneratedDialog
        open={newSecretGenerated}
        setOpen={setNewSecretGenerated}
        client={client}
      />
    </Box>
  );
};
