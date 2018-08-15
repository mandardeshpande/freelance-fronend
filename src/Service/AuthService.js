import axios from 'axios';
import {buyerLoginEndPoint, sellerLoginEndPoint} from '../config/config';

const authBuyer = (email, password)=>{
    const host = localStorage.getItem('host');
    return axios.post(`${host}/${buyerLoginEndPoint}`,{email,password});
};

const authSeller = (email, password)=>{
    const host = localStorage.getItem('host');
    return axios.post(`${host}/${sellerLoginEndPoint}`,{email,password});
};

export {
    authBuyer,
    authSeller
}