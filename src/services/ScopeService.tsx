import request from "lib/AxiosHelper";
import {
  APIResponse,
  TErrorBackend,
  TScopeReq,
  type TScope,
} from "types/DataTypes";
import { getBackendErrorMessage } from "utils/conversionHelper";

export function fetchAllScopes(): Promise<TScope[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<APIResponse<TScope[]>>(
        "GET",
        "/api/V1/scopes",
        {}
      );
      resolve(response.data.payload);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}

export function createNewScope(data: TScopeReq): Promise<TScope> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<APIResponse<TScope>>(
        "POST",
        "/api/V1/scopes",
        data
      );
      resolve(response.data.payload);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}
