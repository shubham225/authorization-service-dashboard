import request from "lib/AxiosHelper";
import {
  APIResponse,
  TDataMetricsCount,
  TErrorBackend,
  TMeasurement,
  TMetricsResponse,
} from "types/DataTypes";
import { getBackendErrorMessage } from "utils/conversionHelper";

export function signout(): Promise<any> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request("GET", "/logout", {});
      resolve(response);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}

export function fetchHttpServerRequest(): Promise<TMeasurement[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<TMetricsResponse>(
        "GET",
        "/actuator/metrics/http.server.requests",
        {}
      );
      resolve(response.data.measurements);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}

export function fetchFreeDiskSpace(): Promise<TMeasurement[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<TMetricsResponse>(
        "GET",
        "/actuator/metrics/disk.free",
        {}
      );
      resolve(response.data.measurements);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}

export function fetchTotalDiskSpace(): Promise<TMeasurement[]> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<TMetricsResponse>(
        "GET",
        "/actuator/metrics/disk.total",
        {}
      );
      resolve(response.data.measurements);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}

export function fetchTotalDataCount(): Promise<TDataMetricsCount> {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await request<APIResponse<TDataMetricsCount>>(
        "GET",
        "/api/V1/dashboard/metrics",
        {}
      );
      resolve(response.data.payload);
    } catch (error: any) {
      let errorM: TErrorBackend = getBackendErrorMessage(error);
      reject(errorM);
    }
  });
}
