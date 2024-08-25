export const scopeColumns = [
    {
        field: "id",
        headerName: "ID"
    },
    {
        field: "scope",
        headerName: "Scope",
        flex: 1
    },
    {
        field: "description",
        headerName: "Description",
        flex: 1
    }
  ]

export const clientColumns = [
    {
        field: "client_id",
        headerName: "Client ID",
        minWidth: 150
    },
    {
        field: "client_name",
        headerName: "Client Name",
        minWidth: 250
    },
    {
        field: "authorization_grant_types",
        headerName: "Authorization Grant Types",
        minWidth: 300
    },
    {
        field: "client_authentication_methods",
        headerName: "Authorization Methods",
        minWidth: 300
    },
    {
        field: "redirect_uris",
        headerName: "Redirect URIs",
        minWidth: 300
    },
    {
        field: "post_logout_redirect_uris",
        headerName: "Post Logout Redirect URIs",
        minWidth: 300
    },
    {
        field: "scopes",
        headerName: "Scopes",
        minWidth: 300
    }
  ]