import {
  TAlert,
  TAppContext,
  TChangePassword,
  TClientRequest,
  TRoleReq,
  TScopeReq,
  TUser,
  TUserReq,
} from "types/DataTypes";

export const initScope: TScopeReq = { scope: "", description: "" };

export const initAlert: TAlert = {
  open: false,
  message: "",
  severity: "error",
  title: "",
  duration: 5000,
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

export const initChangePasswd: TChangePassword = {
  oldPassword: "",
  newPassword: "",
  confirmPassword: "",
};

export const initUserData: TUser = {
  id: 1234,
  username: "",
  email: "",
  mobile: "",
  address: "",
  city: "",
  country: "",
  roles: [],
};