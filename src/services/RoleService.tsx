import { roleData } from "data/DummyData"
import { TErrorBackend, TRole, TRoleReq, TScopeReq, type TScope } from "types/DataTypes";
import { getBackendErrorMessage } from "utils/conversionHelper";

export function fetchAllRoles() : Promise<TRole[]> {
    return new Promise(async (resolve, reject) => {
        try {
            // const response = await request( "GET", "/admin/exam", {});
            resolve(roleData);
        }catch(error : any) {
            let errorM : TErrorBackend = getBackendErrorMessage(error);
            reject(errorM);
        }
    });
}

export function createNewRole( request : TRoleReq ) : Promise<TRole> {
    return new Promise(async (resolve, reject) => {
        try {
            // const response = await request( "GET", "/admin/exam", {});
            resolve({...request, id : Math.random()});
        }catch(error : any) {
            let errorM : TErrorBackend = getBackendErrorMessage(error);
            reject(errorM);
        }
    });
}