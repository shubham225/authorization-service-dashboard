import request from "lib/AxiosHelper";
import {
  APIResponse,
  TClient,
  TClientRequest,
  TErrorBackend,
} from "types/DataTypes";
import { getBackendErrorMessage } from "utils/conversionHelper";

export function fetchAllClients(): Promise<TClient[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<APIResponse<TClient[]>>(
        "GET",
        "/api/V1/clients",
        {}
      );
      resolve(response.data.payload);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}

export function createNewClient(data: TClientRequest): Promise<TClient> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<APIResponse<TClient>>(
        "POST",
        "/api/V1/clients/register",
        data
      );
      resolve(response.data.payload);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}

export function getClientCount(data: TClientRequest): Promise<number> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<APIResponse<number>>(
        "POST",
        "/api/V1/clients/count",
        data
      );
      resolve(response.data.payload);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}