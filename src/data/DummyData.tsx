import { TClient, TRole, TScope, TUser } from "types/DataTypes";

export const scopeData: TScope[] = [
  {
    id: 111,
    scope: "client.write",
    description: "Client with write permission",
  },
  {
    id: 222,
    scope: "client.read",
    description: "Client with read permission",
  },
];

export const clientData: TClient[] = [
  {
    id: "fff",
    clientId: "fffffff-ewfbwevy-ee",
    clientSecret: "qwert-wdqwydgqwyfcey-efhqebhfcqj",
    clientName: "my-client",
    authorizationGrantTypes: ["refresh_token", "client_credentials"],
    clientAuthenticationMethods: ["client_secret_basic"],
    redirectUris: [
      "https://oauth.pstmn.io/v1/callback",
      "https://localhost:9000/login",
    ],
    postLogoutRedirectUris: [],
    scopes: ["openid", "profile", "read"],
  },
  {
    id: "ffftt",
    clientId: "ffffffftt",
    clientName: "my-client",
    authorizationGrantTypes: ["refresh_token", "client_credentials"],
    clientAuthenticationMethods: ["client_secret_basic"],
    redirectUris: [
      "https://oauth.pstmn.io/v1/callback",
      "https://localhost:9000/login",
    ],
    postLogoutRedirectUris: [],
    scopes: ["openid", "profile", "read"],
  },
];

export const roleData: TRole[] = [
  {
    id: 111,
    role: "ADMIN",
    description: "Admin User",
  },
  {
    id: 222,
    role: "USER",
    description: "Normal User",
  },
];

export const userData: TUser[] = [
  {
    id: 112,
    username: "ADMIN",
    email: "admin@gmail.com",
    mobile: "9876543210",
    address: "",
    city: "",
    country: "",
    roles: ["ADMIN", "USER"],
  },
  {
    id: 111,
    username: "USER",
    email: "user@gmail.com",
    mobile: "9876543210",
    address: "",
    city: "",
    country: "",
    roles: ["USER"],
  },
];
