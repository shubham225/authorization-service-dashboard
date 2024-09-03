import * as yup from "yup";

export const scopeSchema = yup.object().shape({
  scope: yup.string().min(4).required("required Scope"),
  description: yup.string().required("required Description"),
});

export const clientSchema = yup.object().shape({
  authorizationGrantTypes: yup
    .array()
    .required("at least one grant type required"),
  clientAuthenticationMethods: yup
    .array()
    .required("at least one method required"),
  scopes: yup.array().required("required Scope"),
});

export const roleSchema = yup.object().shape({
  role: yup.string().min(4).required("required Role"),
  description: yup.string().required("required Description"),
});

export const userSchema = yup.object().shape({
  username: yup.string().min(4).required("required"),
  password: yup.string().min(4).required("required"),
  email: yup.string().required("required Email"),
});
