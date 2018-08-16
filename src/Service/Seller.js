import axios from 'axios';
import { getSellerProjects, getBidsProjects, postProjects } from '../config/config';
import getEnvConfig from '../config/config';
import getEnvironmentFromUrl from "../utils/getEnvironmentFromUrl";


const env = getEnvironmentFromUrl();
const host = getEnvConfig(env).host;

const getAllProjectsPostedBySeller = (userId)=>{

    return axios.get(`${host}/${getSellerProjects}/${userId}`);
};

const getAllBidForProjectBySeller = (userId)=>{
    return axios.get(`${host}/${getBidsProjects}/${userId}`);
};

const postProjectBySeller = (userId, payload)=>{
    return axios.post(`${host}/${postProjects}/${userId}`,payload);
};

export{
    getAllProjectsPostedBySeller,
    getAllBidForProjectBySeller,
    postProjectBySeller
};