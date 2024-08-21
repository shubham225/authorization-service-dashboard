import { TErrorBackend } from "types/DataTypes"

export const getBackendErrorMessage = (error : any) : TErrorBackend => {
    let errorM : TErrorBackend;
    if(error.response) {
        errorM = {
            title: 'Error from Backend',
            message : error.response.data.messsage,
            severity : "error"
        }
    }else {
        errorM = {
            title: error.name + " [" + error.code + "]",
            message : error.message,
            severity : "error"
        }
    }

    return errorM;
}