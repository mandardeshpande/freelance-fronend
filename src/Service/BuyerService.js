import axios from 'axios';
import {getAllPostedProjectsBeforeBidEndTime} from '../config/config';
import getEnvConfig from "../config/config";
import getEnvironmentFromUrl from "../utils/getEnvironmentFromUrl";

const env = getEnvironmentFromUrl();
const host = getEnvConfig(env).host;

const getAllProjectPosted = ()=>{
    return axios.get(`${host}/${getAllPostedProjectsBeforeBidEndTime}`);
};

export {
    getAllProjectPosted
}