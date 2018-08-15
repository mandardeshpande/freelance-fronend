import axios from 'axios';
import {getBidProjectsForBuyer, postBid, getWinningBidForBuyer} from '../config/config';

const placeBid = (payLoad)=>{
    const host = localStorage.getItem('host');
    return axios.post(`${host}/${postBid}`,payLoad);
};

const getAllBids = (userId)=>{
    const host = localStorage.getItem('host');
    return axios.get(`${host}/${getBidProjectsForBuyer}/${userId}`);
};

const getAllWinningBidsForUser = (userId)=>{
    const host = localStorage.getItem('host');
    return axios.get(`${host}/${getWinningBidForBuyer}/${userId}`);
};

export {
    placeBid,
    getAllBids,
    getAllWinningBidsForUser

}