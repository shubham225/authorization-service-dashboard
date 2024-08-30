import { TextField } from "@mui/material";
import { TUserFormProps } from "types/PropsTypes";

export const UserForm = (props: TUserFormProps) => {
  const { formik } = props;

  return (
    <>
      <TextField
        fullWidth
        id="username"
        name="username"
        value={formik?.values.username}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.username && !!formik?.errors.username}
        helperText={formik?.touched.username && formik?.errors.username}
        label="Username"
        type="input"
        margin="normal"
      />
      <TextField
        fullWidth
        id="email"
        name="email"
        value={formik?.values.email}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.email && !!formik?.errors.email}
        helperText={formik?.touched.email && formik?.errors.email}
        label="E-Mail"
        type="input"
        margin="normal"
      />
    </>
  );
};
