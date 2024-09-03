import request from "lib/AxiosHelper";
import { APIResponse, TErrorBackend, TUser, TUserReq } from "types/DataTypes";
import { getBackendErrorMessage } from "utils/conversionHelper";

export function fetchAllUsers(): Promise<TUser[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<APIResponse<TUser[]>>(
        "GET",
        "/api/V1/user/",
        {}
      );
      resolve(response.data.payload);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}

export function createNewUser(data: TUserReq): Promise<TUser> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<APIResponse<TUser>>(
        "POST",
        "/api/V1/user/",
        data
      );
      resolve(response.data.payload);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}
