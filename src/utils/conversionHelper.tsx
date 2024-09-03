import { TErrorBackend } from "types/DataTypes";

export const getBackendErrorMessage = (error: any): TErrorBackend => {
  let errorM: TErrorBackend;
  if (error.response) {
    errorM = {
      title: "Error from Backend",
      message: error.response.data.message,
      severity: "error",
    };
  } else {
    console.log(error);
    errorM = {
      title: error.code,
      message: error.message,
      severity: "error",
    };
  }

  console.log("error : ", error, errorM);
  return errorM;
};
