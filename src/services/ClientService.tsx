import { clientData } from "data/DummyData"
import { TClient, TClientRequest, TErrorBackend } from "types/DataTypes";
import { getBackendErrorMessage } from "utils/conversionHelper";

export function fetchAllClients() : Promise<TClient[]> {
    return new Promise(async (resolve, reject) => {
        try {
            // const response = await request( "GET", "/admin/exam", {});
            resolve(clientData);
        }catch(error : any) {
            let errorM : TErrorBackend = getBackendErrorMessage(error);
            reject(errorM);
        }
    });
}

export function createNewClient( request : TClientRequest ) : Promise<TClient> {
    return new Promise(async (resolve, reject) => {
        try {
            // const response = await request( "GET", "/admin/exam", {});
            resolve({...request, client_id: 'dfdfdfd'});
        }catch(error : any) {
            let errorM : TErrorBackend = getBackendErrorMessage(error);
            reject(errorM);
        }
    });
}