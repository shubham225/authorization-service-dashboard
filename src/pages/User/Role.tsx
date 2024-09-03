import { Grid } from "@mui/material";
import { RoleDialog } from "components/Dialog/RoleDialog";
import { RoleTable } from "components/Tables/RoleTable";
import { WindowBar } from "components/WindowUI/WindowBar";
import { useAlert } from "hooks/useAlert";
import { useEffect, useState } from "react";
import { fetchAllRoles } from "services/RoleService";
import { TButtonClickEvent, TRole } from "types/DataTypes";

export const Role = () => {
  const [data, setData] = useState<TRole[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { showAlert } = useAlert();

  // Fetch Initial Data
  useEffect(() => {
    fetchAllRolesAsync();
  }, []);

  const fetchAllRolesAsync = async () => {
    try {
      const values = await fetchAllRoles();
      const val: TRole[] = values;

      if (val) setData(val);
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };

  const onNewButtonClick = (e: TButtonClickEvent) => {
    e.preventDefault();
    setOpenDialog(true);
  };

  // Add the received data
  const newRecordCallback = (record: TRole) => {
    setData([...data, record]);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <WindowBar onNewButtonClick={onNewButtonClick} title="Role" />
      </Grid>
      <Grid item xs={12}>
        <RoleTable data={data} />
        <RoleDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          newRecordCallback={newRecordCallback}
        />
      </Grid>
    </Grid>
  );
};
