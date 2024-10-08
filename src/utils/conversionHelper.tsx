import { TErrorBackend } from "types/DataTypes";

export const getBackendErrorMessage = (error: any): TErrorBackend => {
  let errorM: TErrorBackend;
  if (error.response) {
    errorM = {
      title: "Error - " + (error.response.data.code || error.code),
      message: error.response.data.message || error.message,
      severity: "error",
      duration: 5000,
    };
  } else {
    errorM = {
      title: error.code,
      message: error.message,
      severity: "error",
      duration: 5000,
    };
  }
  return errorM;
};
