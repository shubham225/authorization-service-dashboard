import { DialogFormWindow } from "../WindowUI/DialogFormWindow";
import { TChangePasswordDialog } from "types/PropsTypes";
import { TButtonClickEvent, TChangePassword } from "types/DataTypes";
import SaveIcon from "@mui/icons-material/Save";
import { useAlert } from "hooks/useAlert";
import { initChangePasswd } from "constant/Initial";
import { ChangePasswordForm } from "components/forms/ChangePasswdForm";
import { changePassword } from "services/UserService";
import { changePasswordSchema } from "types/YupSchema";

export const ChangePasswordDialog = (props: TChangePasswordDialog) => {
  const { openDialog, setOpenDialog } = props;
  const { showAlert } = useAlert();

  const changePasswordAsync = async (value: TChangePassword) => {
    try {
      let response = await changePassword(value);
      showAlert(response, "success", "Success");
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };

  const onOkButtonClick = (values: any) => {
    changePasswordAsync(values);
  };

  const onCloseButtonClick = (e: TButtonClickEvent) => {
    // TODO : some operation to perform on close
  };

  return (
    <>
      <DialogFormWindow
        open={openDialog}
        initData={initChangePasswd}
        setOpen={setOpenDialog}
        title="Change Password"
        maxWidth="sm"
        okButtonIcon={<SaveIcon />}
        okButtonLabel="Change"
        closeButtonLabel="Cancel"
        onOkButtonClick={onOkButtonClick}
        onCloseButtonClick={onCloseButtonClick}
        yupSchema={changePasswordSchema}
      >
        <ChangePasswordForm />
      </DialogFormWindow>
    </>
  );
};
