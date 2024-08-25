import { DialogFormWindow } from "../WindowUI/DialogFormWindow";
import { TClientDialogProps } from "types/PropsTypes";
import { TButtonClickEvent, TFormRequestValues } from "types/DataTypes";
import SaveIcon from "@mui/icons-material/Save";
import { useAlert } from "hooks/useAlert";
import { clientSchema } from "types/YupSchema";
import { initScope } from "constant/Initial";
import { createNewClient } from "services/ClientService";
import { ClientForm } from "components/forms/ClientForm";

export const ClientDialog = (props: TClientDialogProps) => {
  const { openDialog, setOpenDialog, newRecordCallback } = props;
  const { showAlert } = useAlert();

  const createNewClientAsync = async (value: any) => {
    try {
      let clientResp = await createNewClient(value);
      newRecordCallback(clientResp);
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };

  const onOkButtonClick = (values: TFormRequestValues) => {
    if (values != null) {
      // Request to backend for new scope creation
      console.log("Creating new Record",values)
      createNewClientAsync(values);
    }
  };

  const onCloseButtonClick = (e: TButtonClickEvent) => {
    console.log("tetst");
    showAlert("Close Button has been clicked", "error", "Action Performed");
  };

  return (
    <>
      <DialogFormWindow
        open={openDialog}
        initData={initScope}
        setOpen={setOpenDialog}
        title="Create New Client"
        maxWidth="md"
        okButtonIcon={<SaveIcon />}
        okButtonLabel="Save"
        closeButtonLabel="Close"
        onOkButtonClick={onOkButtonClick}
        onCloseButtonClick={onCloseButtonClick}
        yupSchema={clientSchema}
      >
        <ClientForm />
      </DialogFormWindow>
    </>
  );
};
