import {
  TAlert,
  TAppContext,
  TClientRequest,
  TRoleReq,
  TScopeReq,
  TUserReq,
} from "types/DataTypes";

export const initScope: TScopeReq = { scope: "", description: "" };

export const initAlert: TAlert = {
  open: false,
  message: "",
  severity: "error",
  title: "",
};

export const initAppContext: TAppContext = {
  alert: initAlert,
};

export const initClient: TClientRequest = {
  clientId: "",
  clientSecret: "",
  clientName: "",
  authorizationGrantTypes: [],
  clientAuthenticationMethods: [],
  redirectUris: [],
  postLogoutRedirectUris: [],
  scopes: [],
};

export const initRole: TRoleReq = { role: "", description: "" };

export const initUser: TUserReq = {
  username: "",
  email: "",
  mobile: "",
  address: "",
  city: "",
  country: "",
  roles: [],
};
