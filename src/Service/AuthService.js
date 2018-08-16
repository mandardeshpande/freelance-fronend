import axios from 'axios';
import {buyerLoginEndPoint, sellerLoginEndPoint} from '../config/config';
import getEnvConfig from "../config/config";
import getEnvironmentFromUrl from "../utils/getEnvironmentFromUrl";

const env = getEnvironmentFromUrl();
const host = getEnvConfig(env).host;


const authBuyer = (email, password)=>{
    return axios.post(`${host}/${buyerLoginEndPoint}`,{email,password});
};

const authSeller = (email, password)=>{
    return axios.post(`${host}/${sellerLoginEndPoint}`,{email,password});
};

export {
    authBuyer,
    authSeller
}