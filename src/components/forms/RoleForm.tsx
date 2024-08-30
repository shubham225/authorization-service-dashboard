import { TextField } from "@mui/material";
import { TRoleFormProps } from "types/PropsTypes";

export const RoleForm = (props: TRoleFormProps) => {
  const { formik } = props;

  return (
    <>
      <TextField
        fullWidth
        id="role"
        name="role"
        value={formik?.values.role}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.role && !!formik?.errors.role}
        helperText={formik?.touched.role && formik?.errors.role}
        label="Role"
        type="input"
        margin="normal"
      />
      <TextField
        fullWidth
        id="description"
        name="description"
        value={formik?.values.description}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.description && !!formik?.errors.description}
        helperText={formik?.touched.description && formik?.errors.description}
        label="Description"
        type="input"
        margin="normal"
      />
    </>
  );
};
