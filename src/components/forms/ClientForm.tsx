import { TextField } from "@mui/material";
import MultipleSelect from "components/MultipleSelect";
import { authorizationGrantType, clientAuthenticationMethods } from "constant/Enums";
import { TClientFormProps } from "types/PropsTypes";

export const ClientForm = (props: TClientFormProps) => {
  const { formik } = props;

  // Read this from backend
  const scopes = [
    "client.write",
    "client.read"
  ];

  return (
    <>
      <TextField
        fullWidth
        id="client_name"
        name="client_name"
        value={formik?.values.client_name}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.client_name && !!formik?.errors.client_name}
        helperText={formik?.touched.client_name && formik?.errors.client_name}
        label="Client Name"
        type="input"
        margin="normal"
      />
      <MultipleSelect 
        id="authorization_grant_types"
        name="authorization_grant_types"
        value={formik?.values.authorization_grant_types}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.authorization_grant_types && !!formik?.errors.authorization_grant_types}
        label="Authorization Grant Types"
        margin="normal"
        enums={authorizationGrantType}
      />
      <MultipleSelect 
        id="client_authentication_methods"
        name="client_authentication_methods"
        value={formik?.values.client_authentication_methods}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.client_authentication_methods && !!formik?.errors.client_authentication_methods}
        label="Authorization Methods"
        margin="normal"
        enums={clientAuthenticationMethods}
      />
      <TextField
        fullWidth
        id="redirect_uris"
        name="redirect_uris"
        value={formik?.values.redirect_uris}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.redirect_uris && !!formik?.errors.redirect_uris}
        helperText={formik?.touched.redirect_uris && formik?.errors.redirect_uris}
        label="Redirect URIs"
        type="input"
        margin="normal"
      />
      <TextField
        fullWidth
        id="post_logout_redirect_uris"
        name="post_logout_redirect_uris"
        value={formik?.values.post_logout_redirect_uris}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.post_logout_redirect_uris && !!formik?.errors.post_logout_redirect_uris}
        helperText={formik?.touched.post_logout_redirect_uris && formik?.errors.post_logout_redirect_uris}
        label="Post Logout Redirect URIs"
        type="input"
        margin="normal"
      />
      <MultipleSelect 
        id="scopes"
        name="scopes"
        value={formik?.values.scopes}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.scopes && !!formik?.errors.scopes}
        label="Scopes"
        margin="normal"
        enums={scopes}
      />
    </>
  );
};
