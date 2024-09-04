import { TextField } from "@mui/material";
import { TChangePasswordFormProps } from "types/PropsTypes";

export const ChangePasswordForm = (props: TChangePasswordFormProps) => {
  const { formik } = props;

  return (
    <>
      <TextField
        fullWidth
        id="oldPassword"
        name="oldPassword"
        value={formik?.values.oldPassword}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.oldPassword && !!formik?.errors.oldPassword}
        helperText={formik?.touched.oldPassword && formik?.errors.oldPassword}
        label="Old Password"
        type="password"
        margin="normal"
      />
      <TextField
        fullWidth
        id="newPassword"
        name="newPassword"
        value={formik?.values.newPassword}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.newPassword && !!formik?.errors.newPassword}
        helperText={formik?.touched.newPassword && formik?.errors.newPassword}
        label="New Password"
        type="password"
        margin="normal"
      />
      <TextField
        fullWidth
        id="confirmPassword"
        name="confirmPassword"
        value={formik?.values.confirmPassword}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.confirmPassword && !!formik?.errors.confirmPassword}
        helperText={formik?.touched.confirmPassword && formik?.errors.confirmPassword}
        label="Confirm Password"
        type="password"
        margin="normal"
      />
    </>
  );
};
