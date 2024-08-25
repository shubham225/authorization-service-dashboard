import { TAuthGrantType, TClient, TClientAuthMethod } from "types/DataTypes"

export const scopeData = [
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

  type TClient2 = {
    id: number,
    client_id: string,
    client_name: string,
    authorization_grant_types: TAuthGrantType[],
    client_authentication_methods: TClientAuthMethod[],
    redirect_uris: string[],
    post_logout_redirect_uris: string[],
    scopes: string[]
  };

export const clientData : TClient2[] = [
    {
      id: 1,
      client_id: "fffffff",
      client_name : "my-client",
      authorization_grant_types : ["refresh_token", "client_credentials"],
      client_authentication_methods : ["client_secret_basic"],
      redirect_uris : ["https://oauth.pstmn.io/v1/callback", "https://localhost:9000/login"],
      post_logout_redirect_uris : [],
      scopes : ["openid", "profile", "read"]
    },
    {
      id: 2,
      client_id: "fffffzzz",
      client_name : "my-client2",
      authorization_grant_types : ["refresh_token", "client_credentials"],
      client_authentication_methods : ["client_secret_basic"],
      redirect_uris : ["https://oauth.pstmn.io/v1/callback", "https://localhost:9000/login"],
      post_logout_redirect_uris : [],
      scopes : ["openid", "profile", "read"]
    }
  ]