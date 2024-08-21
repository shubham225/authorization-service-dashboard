import axios from "axios";
import { THTTPMethod } from "types/DataTypes";

const address = document.getElementById("httpPath")?.innerHTML || 'http://localhost:9000';

axios.defaults.baseURL = (address + '/api/V1');
axios.defaults.headers.post["Content-type"] = 'application/json'

function request(method : THTTPMethod, url : string, data : Object) {
    const tokenString = sessionStorage.getItem('token');

    console.log("ADDR",axios.defaults.baseURL);
    let headers = {};
    
    if(tokenString){
        const userToken = JSON.parse(tokenString);
        const token = userToken?.token;
        if(token) headers = {"Authorization" : ("Bearer " + token)};
    }

    return axios(
        {
            method : method,
            headers : headers,
            url : url,
            data : data
        }
    );
}

export function removeAuth() {
    sessionStorage.removeItem("token");
}

export default request;