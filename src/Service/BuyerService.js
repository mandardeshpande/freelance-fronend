import axios from 'axios';
import {getAllPostedProjectsBeforeBidEndTime} from '../config/config';

const getAllProjectPosted = ()=>{
    const host = localStorage.getItem('host');
    return axios.get(`${host}/${getAllPostedProjectsBeforeBidEndTime}`);
};

export {
    getAllProjectPosted
}