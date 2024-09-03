import request from "lib/AxiosHelper";
import { APIResponse, TErrorBackend, TRole, TRoleReq } from "types/DataTypes";
import { getBackendErrorMessage } from "utils/conversionHelper";

export function fetchAllRoles(): Promise<TRole[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<APIResponse<TRole[]>>(
        "GET",
        "/api/V1/role/",
        {}
      );
      resolve(response.data.payload);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}

export function createNewRole(data: TRoleReq): Promise<TRole> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<APIResponse<TRole>>(
        "POST",
        "/api/V1/role/",
        data
      );
      resolve(response.data.payload);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}
