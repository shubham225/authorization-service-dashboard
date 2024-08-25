import { TextField } from "@mui/material";
import { TClientFormProps } from "types/PropsTypes";

export const ClientForm = (props: TClientFormProps) => {
  const { formik } = props;

  return (
    <>
      <TextField
        fullWidth
        id="client_name"
        name="Client Name"
        value={formik?.values.client_name}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.client_name && !!formik?.errors.client_name}
        helperText={formik?.touched.client_name && formik?.errors.client_name}
        label="Client Name"
        type="input"
        margin="normal"
      />
      <TextField
        fullWidth
        id="authorization_grant_types"
        name="authorization grant types"
        value={formik?.values.authorization_grant_types}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.authorization_grant_types && !!formik?.errors.authorization_grant_types}
        helperText={formik?.touched.authorization_grant_types && formik?.errors.authorization_grant_types}
        label="authorization grant types"
        type="input"
        margin="normal"
      />
    </>
  );
};
