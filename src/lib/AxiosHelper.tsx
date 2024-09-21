import axios from "axios";
import { THTTPMethod } from "types/DataTypes";

const address =
  window.location.origin || document.getElementById("httpPath")?.innerHTML;

axios.defaults.baseURL = address;
axios.defaults.headers.post["Content-type"] = "application/json";

function request<T>(method: THTTPMethod, url: string, data: any) {
  const tokenString = sessionStorage.getItem("token");
  let headers: any = {};

  if (tokenString) {
    const token = tokenString;
    if (token) headers = { ...headers, Authorization: "Bearer " + token };
  }

  return axios<T>({
    method: method,
    headers: headers,
    url: url,
    data: data,
  });
}

export function removeAuth() {
  sessionStorage.removeItem("token");
}

export default request;
