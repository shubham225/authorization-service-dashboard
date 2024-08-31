import { DialogFormWindow } from "../WindowUI/DialogFormWindow";
import { TUserDialogProps } from "types/PropsTypes";
import { TButtonClickEvent, TFormRequestValues } from "types/DataTypes";
import SaveIcon from "@mui/icons-material/Save";
import { useAlert } from "hooks/useAlert";
import { userSchema } from "types/YupSchema";
import { initUser } from "constant/Initial";
import { RoleForm } from "components/forms/RoleForm";
import { createNewUser } from "services/UserService";
import { UserForm } from "components/forms/UserForm";

export const UserDialog = (props: TUserDialogProps) => {
  const { openDialog, setOpenDialog, newRecordCallback } = props;
  const { showAlert } = useAlert();

  const createNewUserAsync = async (value: any) => {
    try {
      let userResp = await createNewUser(value);
      newRecordCallback(userResp);
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };

  const onOkButtonClick = (values: TFormRequestValues) => {
    if (values != null) {
      // Request to backend for new role creation
      createNewUserAsync(values);
    }
  };

  const onCloseButtonClick = (e: TButtonClickEvent) => {
    console.log("Close Clicked...");
  };

  return (
    <>
      <DialogFormWindow
        open={openDialog}
        initData={initUser}
        setOpen={setOpenDialog}
        title="Create New User"
        maxWidth="md"
        okButtonIcon={<SaveIcon />}
        okButtonLabel="Save"
        closeButtonLabel="Close"
        onOkButtonClick={onOkButtonClick}
        onCloseButtonClick={onCloseButtonClick}
        yupSchema={userSchema}
      >
        <UserForm />
      </DialogFormWindow>
    </>
  );
};
