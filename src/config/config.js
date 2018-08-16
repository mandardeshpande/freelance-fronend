export const sellerLoginEndPoint = 'user/auth/seller';
export const buyerLoginEndPoint = 'user/auth/buyer';
export const getSellerProjects = 'project';
export const getBidsProjects = 'bid/project';
export const postProjects = 'project/post';
export const getAllPostedProjectsBeforeBidEndTime = 'project/all/beforebidendtime';
export const postBid = 'bid/add';
export const getBidProjectsForBuyer = 'bid/project/buyer';
export const getWinningBidForBuyer='bid/winning';

const envConfigMap = {
    local:{
        host:'http://localhost:8080',
        sellerLoginEndPoint,
        buyerLoginEndPoint,
        getSellerProjects,
        getBidsProjects,
        postProjects
    },
    prod:{
        host:'https://boiling-spire-43934.herokuapp.com',
        sellerLoginEndPoint,
        buyerLoginEndPoint,
        getSellerProjects,
        getBidsProjects,
        postProjects
    }
};


const getEnvConfig = env => envConfigMap[env];

export default getEnvConfig;


