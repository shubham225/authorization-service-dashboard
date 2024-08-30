import { TClient, TRole, TScope } from "types/DataTypes"

export const scopeData : TScope[] = [
    {
      id : 111,
      scope: 'client.write',
      description: 'Client with write permission'
    },
    {
      id : 222,
      scope: 'client.read',
      description: 'Client with read permission'
    }
  ]

export const clientData : TClient[] = [
    {
      client_id: "fffffff",
      client_name : "my-client",
      authorization_grant_types : ["refresh_token", "client_credentials"],
      client_authentication_methods : ["client_secret_basic"],
      redirect_uris : ["https://oauth.pstmn.io/v1/callback", "https://localhost:9000/login"],
      post_logout_redirect_uris : [],
      scopes : ["openid", "profile", "read"]
    },
    {
      client_id: "fffffzzz",
      client_name : "my-client2",
      authorization_grant_types : ["refresh_token", "client_credentials"],
      client_authentication_methods : ["client_secret_basic"],
      redirect_uris : ["https://oauth.pstmn.io/v1/callback", "https://localhost:9000/login"],
      post_logout_redirect_uris : [],
      scopes : ["openid", "profile", "read"]
    }
  ]

  export const roleData : TRole[] = [
    {
      id : 111,
      role: 'ADMIN',
      description: 'Admin User'
    },
    {
      id : 222,
      role: 'USER',
      description: 'Normal User'
    }
  ]