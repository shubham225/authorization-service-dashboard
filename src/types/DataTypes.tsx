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
  client_id: string;
  client_secret?: string;
  client_name: string;
  authorization_grant_types: TAuthGrantType[];
  client_authentication_methods: TClientAuthMethod[];
  redirect_uris: string[];
  post_logout_redirect_uris: string[];
  scopes: string[];
};

export type TClientRequest = Omit<TClient, "client_id">;

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
  email: string;
  mobile: string;
  roles: string[];
};

export type TUserReq = Omit<TUser, "id">;

// Common
export type TFormRequestValues = TScopeReq | TClientRequest | TRoleReq | TUserReq;