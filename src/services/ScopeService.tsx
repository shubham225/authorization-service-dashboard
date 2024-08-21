import { scopeData } from "temp/DummyData"
import { TErrorBackend, TScopeReq, type TScope } from "types/DataTypes";
import { getBackendErrorMessage } from "utils/conversionHelper";

export function fetchAllScopes() : Promise<TScope[]> {
    return new Promise(async (resolve, reject) => {
        try {
            // const response = await request( "GET", "/admin/exam", {});
            resolve(scopeData);
        }catch(error : any) {
            let errorM : TErrorBackend = getBackendErrorMessage(error);
            reject(errorM);
        }
    });
}

export function createNewScope( request : TScopeReq ) : Promise<TScope> {
    return new Promise(async (resolve, reject) => {
        try {
            // const response = await request( "GET", "/admin/exam", {});
            resolve({...request, id : 123});
        }catch(error : any) {
            let errorM : TErrorBackend = getBackendErrorMessage(error);
            reject(errorM);
        }
    });
}