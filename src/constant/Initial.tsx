import { TAlert, TAppContext, TScopeReq } from "types/DataTypes";

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