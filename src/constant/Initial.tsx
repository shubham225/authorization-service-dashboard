import { TAlert, TAppContext, TClientRequest, TScopeReq } from "types/DataTypes";

export const initScope : TScopeReq = {scope : '', description : ''}

export const initAlert : TAlert = {
    open : false, 
    message : '',
    severity : 'error',
    title : ''
}

export const initAppContext : TAppContext = {
    alert : initAlert
}

export const initClient : TClientRequest = {
    client_name : '',
    authorization_grant_types : [],
    client_authentication_methods : [],
    redirect_uris : [],
    post_logout_redirect_uris : [],
    scopes : []
}