import { DialogFormWindow } from "../WindowUI/DialogFormWindow";
import { TClientDialogProps } from "types/PropsTypes";
import {
  TButtonClickEvent,
  TClient,
} from "types/DataTypes";
import SaveIcon from "@mui/icons-material/Save";
import { useAlert } from "hooks/useAlert";
import { clientSchema } from "types/YupSchema";
import { initClient } from "constant/Initial";
import { createNewClient } from "services/ClientService";
import { ClientForm } from "components/forms/ClientForm";
import ClientGeneratedDialog from "./ClientGeneratedDialog";
import { useState } from "react";

export const ClientDialog = (props: TClientDialogProps) => {
  const { openDialog, setOpenDialog, newRecordCallback } = props;
  const [client, setClient] = useState<TClient>({
    ...initClient,
    id: "",
  });
  const [newClientCreated, setNewClientCreated] = useState<boolean>(false);
  const { showAlert } = useAlert();

  const createNewClientAsync = async (value: any) => {
    try {
      let clientResp = await createNewClient(value);
      setClient(clientResp);
      setNewClientCreated(true);
      newRecordCallback(clientResp);
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };

  const onOkButtonClick = (values: any) => {
    if (values != null) {
      // Request to backend for new scope creation
      values.redirectUris =
        typeof values?.redirectUris === "string"
          ? values?.redirectUris.split(",")
          : values?.redirectUris;
      values.postLogoutRedirectUris =
        typeof values?.postLogoutRedirectUris === "string"
          ? values?.postLogoutRedirectUris.split(",")
          : values?.postLogoutRedirectUris;

      createNewClientAsync(values);
    }
  };

  const onCloseButtonClick = (e: TButtonClickEvent) => {
    // TODO : some operation to perform on close
  };

  return (
    <>
      <DialogFormWindow
        open={openDialog}
        initData={initClient}
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
      <ClientGeneratedDialog
        open={newClientCreated}
        setOpen={setNewClientCreated}
        client={client}
      />
    </>
  );
};
