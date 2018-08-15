import axios from 'axios';
import { getSellerProjects, getBidsProjects, postProjects } from '../config/config'

const getAllProjectsPostedBySeller = (userId)=>{
    return axios.get(`http://localhost:8080/${getSellerProjects}/${userId}`);
};

const getAllBidForProjectBySeller = (userId)=>{
    return axios.get(`http://localhost:8080/${getBidsProjects}/${userId}`);
};

const postProjectBySeller = (userId, payload)=>{
    return axios.post(`http://localhost:8080/${postProjects}/${userId}`,payload);
};

export{
    getAllProjectsPostedBySeller,
    getAllBidForProjectBySeller,
    postProjectBySeller
};