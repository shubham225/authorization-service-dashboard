import { userData } from "data/DummyData"
import { TErrorBackend, TUser, TUserReq } from "types/DataTypes";
import { getBackendErrorMessage } from "utils/conversionHelper";

export function fetchAllUsers() : Promise<TUser[]> {
    return new Promise(async (resolve, reject) => {
        try {
            // const response = await request( "GET", "/admin/exam", {});
            resolve(userData);
        }catch(error : any) {
            let errorM : TErrorBackend = getBackendErrorMessage(error);
            reject(errorM);
        }
    });
}

export function createNewUser( request : TUserReq ) : Promise<TUser> {
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