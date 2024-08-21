import request from "lib/AxiosHelper";
import { TErrorBackend } from "types/DataTypes";
import { getBackendErrorMessage } from "utils/conversionHelper";

export function signout() : Promise<any> {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await request( "POST", "/logout", {});
            console.log("in resp ", response)
            resolve(response);
        }catch(error : any) {
            let errorM : TErrorBackend = getBackendErrorMessage(error);
            reject(errorM);
        }
    });
}