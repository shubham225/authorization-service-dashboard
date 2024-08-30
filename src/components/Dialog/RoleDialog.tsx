import { DialogFormWindow } from "../WindowUI/DialogFormWindow";
import { TRoleDialogProps } from "types/PropsTypes";
import { TButtonClickEvent, TFormRequestValues } from "types/DataTypes";
import SaveIcon from "@mui/icons-material/Save";
import { useAlert } from "hooks/useAlert";
import { roleSchema } from "types/YupSchema";
import { initRole } from "constant/Initial";
import { createNewRole } from "services/RoleService";
import { RoleForm } from "components/forms/RoleForm";

export const RoleDialog = (props: TRoleDialogProps) => {
  const { openDialog, setOpenDialog, newRecordCallback } = props;
  const { showAlert } = useAlert();

  const createNewRoleAsync = async (value: any) => {
    try {
      let roleResp = await createNewRole(value);
      newRecordCallback(roleResp);
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };

  const onOkButtonClick = (values: TFormRequestValues) => {
    if (values != null) {
      // Request to backend for new role creation
      createNewRoleAsync(values);
    }
  };

  const onCloseButtonClick = (e: TButtonClickEvent) => {
    console.log("Close Clicked...");
  };

  return (
    <>
      <DialogFormWindow
        open={openDialog}
        initData={initRole}
        setOpen={setOpenDialog}
        title="Create New Role"
        maxWidth="md"
        okButtonIcon={<SaveIcon />}
        okButtonLabel="Save"
        closeButtonLabel="Close"
        onOkButtonClick={onOkButtonClick}
        onCloseButtonClick={onCloseButtonClick}
        yupSchema={roleSchema}
      >
        <RoleForm />
      </DialogFormWindow>
    </>
  );
};
