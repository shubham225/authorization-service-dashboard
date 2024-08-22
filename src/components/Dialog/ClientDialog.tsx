import { useState } from 'react'
import { DialogWindow } from '../WindowUI/DialogWindow'
import { Box } from '@mui/material'
import { TClientDialogProps } from 'types/PropsTypes'
import { TButtonClickEvent, TClientRequest } from 'types/DataTypes'
import { initClient } from 'constant/Initial'
import SaveIcon from '@mui/icons-material/Save';
import { useAlert } from 'hooks/useAlert'
import { createNewClient } from 'services/ClientService'
import { ClientForm } from 'components/forms/ClientForm'

export const ClientDialog = (props : TClientDialogProps) => {
  const {openDialog, 
         setOpenDialog,
         newRecordCallback} = props;

  const [clientRequest, setClientRequest] = useState<TClientRequest>(initClient);
  const { showAlert } = useAlert();

  const createNewClientAsync = async () => {
    try {
      let scopeResp = await createNewClient(clientRequest);
      newRecordCallback(scopeResp);
    }catch(error : any) {
      showAlert(error.message, error.severity, error.title);
    }
  }

  // Save botton is clicked
  const onOkButtonClick = (e : TButtonClickEvent) => {
    e.preventDefault();

    if(clientRequest != null) {
      // Request to backend for new scope creation
      createNewClientAsync();
    }
    
    setClientRequest(initClient);
    setOpenDialog(false);
  }

  const onCloseButtonClick = (e : TButtonClickEvent) => {
    setClientRequest(initClient);
    showAlert('Close Button has been clicked', 'error', "Action Performed");
  }

  return (
    <>
        <DialogWindow
          open = {openDialog}
          setOpen = {setOpenDialog}
          title = "Create New Client"
          maxWidth = "md"
          okButtonIcon = {<SaveIcon />}
          okButtonLabel = "Save"
          closeButtonLabel = "Close"
          onOkButtonClick={onOkButtonClick}
          onCloseButtonClick={onCloseButtonClick}
          > 
            <Box >
                <ClientForm client={clientRequest} setClient={setClientRequest} />
            </Box>
        </DialogWindow>
    </>
  )
}
