import { TextField } from "@mui/material";
import MultipleSelect from "components/MultipleSelect";
import {
  authorizationGrantType,
  clientAuthenticationMethods,
} from "constant/Enums";
import { useAlert } from "hooks/useAlert";
import { useEffect, useState } from "react";
import { fetchAllScopes } from "services/ScopeService";
import { TClientFormProps } from "types/PropsTypes";

export const ClientForm = (props: TClientFormProps) => {
  const { formik } = props;
  const [scopesEnum, setScopesEnum] = useState<string[]>([]);
  const { showAlert } = useAlert();

  // Read this from backend
  useEffect(() => {
    fetchAllScopsAsync();
  }, []);

  const fetchAllScopsAsync = async () => {
    try {
      const values = await fetchAllScopes();
      const scopesData = values.map((scope) => scope.scope);
      setScopesEnum(scopesData);
    } catch (error: any) {
      showAlert(error.message, error.severity, error.title);
    }
  };

  return (
    <>
      <TextField
        fullWidth
        id="clientName"
        name="clientName"
        value={formik?.values.clientName}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.clientName && !!formik?.errors.clientName}
        helperText={formik?.touched.clientName && formik?.errors.clientName}
        label="Client Name"
        type="input"
        margin="normal"
      />
      <MultipleSelect
        id="authorizationGrantTypes"
        name="authorizationGrantTypes"
        value={formik?.values.authorizationGrantTypes}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={
          !!formik?.touched.authorizationGrantTypes &&
          !!formik?.errors.authorizationGrantTypes
        }
        label="Authorization Grant Types"
        margin="normal"
        enums={authorizationGrantType}
      />
      <MultipleSelect
        id="clientAuthenticationMethods"
        name="clientAuthenticationMethods"
        value={formik?.values.clientAuthenticationMethods}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={
          !!formik?.touched.clientAuthenticationMethods &&
          !!formik?.errors.clientAuthenticationMethods
        }
        label="Authorization Methods"
        margin="normal"
        enums={clientAuthenticationMethods}
      />
      <TextField
        fullWidth
        id="redirectUris"
        name="redirectUris"
        value={formik?.values.redirectUris}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={!!formik?.touched.redirectUris && !!formik?.errors.redirectUris}
        helperText={formik?.touched.redirectUris && formik?.errors.redirectUris}
        label="Redirect URIs"
        type="input"
        margin="normal"
      />
      <TextField
        fullWidth
        id="postLogoutRedirectUris"
        name="postLogoutRedirectUris"
        value={formik?.values.postLogoutRedirectUris}
        onChange={formik?.handleChange}
        onBlur={formik?.handleBlur}
        error={
          !!formik?.touched.postLogoutRedirectUris &&
          !!formik?.errors.postLogoutRedirectUris
        }
        helperText={
          formik?.touched.postLogoutRedirectUris &&
          formik?.errors.postLogoutRedirectUris
        }
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
        enums={scopesEnum}
      />
    </>
  );
};
