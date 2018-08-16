import axios from 'axios';
import {getBidProjectsForBuyer, postBid, getWinningBidForBuyer} from '../config/config';
import getEnvConfig from "../config/config";
import getEnvironmentFromUrl from "../utils/getEnvironmentFromUrl";


const env = getEnvironmentFromUrl();
const host = getEnvConfig(env).host;

const placeBid = (payLoad)=>{
    return axios.post(`${host}/${postBid}`,payLoad);
};

const getAllBids = (userId)=>{
    return axios.get(`${host}/${getBidProjectsForBuyer}/${userId}`);
};

const getAllWinningBidsForUser = (userId)=>{
    return axios.get(`${host}/${getWinningBidForBuyer}/${userId}`);
};

export {
    placeBid,
    getAllBids,
    getAllWinningBidsForUser

}