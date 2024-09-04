import request from "lib/AxiosHelper";
import {
  APIResponse,
  TChangePassword,
  TErrorBackend,
  TUser,
  TUserReq,
} from "types/DataTypes";
import { getBackendErrorMessage } from "utils/conversionHelper";

export function fetchAllUsers(): Promise<TUser[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<APIResponse<TUser[]>>(
        "GET",
        "/api/V1/users",
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
        "/api/V1/users",
        data
      );
      resolve(response.data.payload);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}

export function getUsersCount(data: TUserReq): Promise<number> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<APIResponse<number>>(
        "POST",
        "/api/V1/users/count",
        data
      );
      resolve(response.data.payload);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}

export function changePassword(data: TChangePassword): Promise<string> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<APIResponse<string>>(
        "GET",
        "/api/V1/users/changePassword",
        data
      );
      resolve(response.data.message);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}
