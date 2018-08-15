import axios from 'axios';
import { getSellerProjects } from '../config/config'

const getAllProjectsPostedBySeller = ()=>{
    return axios.get(`http://localhost:8080/${getSellerProjects}/1`)
};

export default getAllProjectsPostedBySeller;