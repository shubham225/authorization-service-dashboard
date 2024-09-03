export type TWidth = "xs" | "sm" | "md" | "lg" | "xl";
export type TAlertSeverity = "error" | "info" | "success" | "warning";
export type THTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
export type TcolorMode = "dark" | "light";

export type TButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
export type TOnClickEvent = (e: TButtonClickEvent) => void;

export type TAlert = {
  open: boolean;
  message: string;
  severity: TAlertSeverity;
  title: string;
};

export type TErrorBackend = Omit<TAlert, "open">;

export type TAppContext = {
  alert: TAlert;
};

export type TAppContextType = {
  appContext: TAppContext;
  setAppContext: React.Dispatch<React.SetStateAction<TAppContext>>;
};

export type TColorModeContext = { toggleColorMode: () => void };

// Scope
export type TScope = {
  id: number;
  scope: string;
  description: string;
};

export type TScopeReq = Omit<TScope, "id">;

// Client
export type TAuthGrantType =
  | "refresh_token"
  | "client_credentials"
  | "authorization_code";
export type TClientAuthMethod = "client_secret_basic";

export type TClient = {
  id: string;
  clientId: string;
  clientName: string;
  clientSecret?: string;
  authorizationGrantTypes: TAuthGrantType[];
  clientAuthenticationMethods: TClientAuthMethod[];
  redirectUris: string[];
  postLogoutRedirectUris: string[];
  scopes: string[];
};

export type TClientRequest = Omit<TClient, "id">;

export type TClientCreateResp = {
  id: string;
  clientId: string;
  clientSecret: string;
};

// Role
export type TRole = {
  id: number;
  role: string;
  description: string;
};

export type TRoleReq = Omit<TRole, "id">;

// User
export type TUser = {
  id: number;
  username: string;
  password?: string;
  email: string;
  mobile: string;
  address: string;
  city: string;
  country: string;
  roles: string[];
};

export type TUserReq = Omit<TUser, "id">;

// Common
export type TFormRequestValues =
  | TClient
  | TScopeReq
  | TClientRequest
  | TRoleReq
  | TUserReq;

// API Response
export type APIResponse<T> = {
  code: number;
  message: string;
  payload: T;
};
