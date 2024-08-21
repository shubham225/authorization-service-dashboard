import { useState } from 'react'
import { DialogWindow } from '../WindowUI/DialogWindow'
import { Box } from '@mui/material'
import { TScopeDialogProps } from 'types/PropsTypes'
import { TButtonClickEvent, TScopeReq } from 'types/DataTypes'
import { ScopeForm } from 'components/forms/ScopeForm'
import { initScope } from 'constant/Initial'
import SaveIcon from '@mui/icons-material/Save';
import { useAlert } from 'hooks/useAlert'
import { createNewScope } from 'services/ScopeService'

export const ScopeDialog = (props : TScopeDialogProps) => {
  const {openDialog, 
         setOpenDialog,
         newRecordCallback} = props;

  const [scopeReq, setScopeReq] = useState<TScopeReq>(initScope);
  const { showAlert } = useAlert();

  const createNewScopeAsync = async () => {
    try {
      let scopeResp = await createNewScope(scopeReq);
      newRecordCallback(scopeResp);
    }catch(error : any) {
      showAlert(error.message, error.severity, error.title);
    }
  }

  // Save botton is clicked
  const onOkButtonClick = (e : TButtonClickEvent) => {
    e.preventDefault();

    if(scopeReq != null) {
      // Request to backend for new scope creation
      createNewScopeAsync();
    }
    
    setScopeReq(initScope);
    setOpenDialog(false);
  }

  const onCloseButtonClick = (e : TButtonClickEvent) => {
    setScopeReq(initScope);
    showAlert('Close Button has been clicked', 'error', "Action Performed");
  }

  return (
    <>
        <DialogWindow
          open = {openDialog}
          setOpen = {setOpenDialog}
          title = "Create New Scope"
          maxWidth = "md"
          okButtonIcon = {<SaveIcon />}
          okButtonLabel = "Save"
          closeButtonLabel = "Close"
          onOkButtonClick={onOkButtonClick}
          onCloseButtonClick={onCloseButtonClick}
          > 
            <Box >
                <ScopeForm scope={scopeReq} setScope={setScopeReq} />
            </Box>
        </DialogWindow>
    </>
  )
}
