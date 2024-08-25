import * as yup from "yup";

export const scopeSchema = yup.object().shape({
    scope: yup.string().min(4).required("required Scope"),
    description: yup.string().required("required Description"),
  });

export const clientSchema = yup.object().shape({
    scopes: yup.string().min(4).required("required Scope")
  });