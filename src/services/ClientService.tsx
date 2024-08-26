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
            resolve({...request, client_id: Math.random().toString(), client_secret: "6e18774f41014546a6a747b04426bdd4"});
        }catch(error : any) {
            let errorM : TErrorBackend = getBackendErrorMessage(error);
            reject(errorM);
        }
    });
}