import { Grid } from "@mui/material";
import { UserDialog } from "components/Dialog/UserDialog";
import { UserTable } from "components/Tables/UserTable";
import { WindowBar } from "components/WindowUI/WindowBar";
import { useAlert } from "hooks/useAlert";
import { useEffect, useState } from "react";
import { fetchAllUsers } from "services/UserService";
import { TButtonClickEvent, TUser } from "types/DataTypes";

export const User = () => {
  const [data, setData] = useState<TUser[]>([]);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const { showAlert } = useAlert();

  // Fetch Initial Data
  useEffect(() => {
    fetchAllUsersAsync();
  }, []);

  const fetchAllUsersAsync = async () => {
    try {
      const values = await fetchAllUsers();
      setData(values);
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };

  const onNewButtonClick = (e: TButtonClickEvent) => {
    e.preventDefault();
    setOpenDialog(true);
  };

  // Add the received data
  const newRecordCallback = (record: TUser) => {
    setData([...data, record]);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <WindowBar onNewButtonClick={onNewButtonClick} title="User" />
      </Grid>
      <Grid item xs={12}>
        <UserTable data={data} />
        <UserDialog
          openDialog={openDialog}
          setOpenDialog={setOpenDialog}
          newRecordCallback={newRecordCallback}
        />
      </Grid>
    </Grid>
  );
};
