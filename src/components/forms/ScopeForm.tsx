import { TextField } from "@mui/material";
import { TScopeFormProps } from "types/PropsTypes";

export const ScopeForm = (props: TScopeFormProps) => {
  const { formik } = props;

  return (
    <>
      <TextField
        fullWidth
        id="scope"
        name="scope"
        value={formik?.values.scope}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.scope && !!formik?.errors.scope}
        helperText={formik?.touched.scope && formik?.errors.scope}
        label="Scope"
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
