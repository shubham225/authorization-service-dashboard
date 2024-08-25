import { DialogFormWindow } from "../WindowUI/DialogFormWindow";
import { TScopeDialogProps } from "types/PropsTypes";
import { TButtonClickEvent, TFormRequestValues } from "types/DataTypes";
import { ScopeForm } from "components/forms/ScopeForm";
import SaveIcon from "@mui/icons-material/Save";
import { useAlert } from "hooks/useAlert";
import { createNewScope } from "services/ScopeService";
import { scopeSchema } from "types/YupSchema";
import { initScope } from "constant/Initial";

export const ScopeDialog = (props: TScopeDialogProps) => {
  const { openDialog, setOpenDialog, newRecordCallback } = props;
  const { showAlert } = useAlert();

  const createNewScopeAsync = async (value: any) => {
    try {
      let scopeResp = await createNewScope(value);
      newRecordCallback(scopeResp);
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };

  const onOkButtonClick = (values: TFormRequestValues) => {
    if (values != null) {
      // Request to backend for new scope creation
      createNewScopeAsync(values);
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
        title="Create New Scope"
        maxWidth="md"
        okButtonIcon={<SaveIcon />}
        okButtonLabel="Save"
        closeButtonLabel="Close"
        onOkButtonClick={onOkButtonClick}
        onCloseButtonClick={onCloseButtonClick}
        yupSchema={scopeSchema}
      >
        <ScopeForm />
      </DialogFormWindow>
    </>
  );
};
