import React from 'react';
import Moment from 'react-moment';

const ShowBids = ({bids}) => {

    const bidsRow = bids.length > 0 && bids.map((bid, idx) => {
        return (<tr key={idx}>
            <th scope="row">{idx + 1}</th>
            <td>{bid.projectTitle}</td>
            <td><Moment>{bid.bidTime}</Moment></td>
            <td>{bid.bidAmount}</td>
        </tr>);
    });

    const showNoRowsToDisplay = <div className="center"> No Projects/bids found</div>;

    if(bids.length === 0){
        return showNoRowsToDisplay;
    }


    return (
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Project Title</th>
                <th scope="col">Bid Time</th>
                <th scope="col">Bid Amount</th>
            </tr>
            </thead>
            <tbody>
            {bidsRow}
            </tbody>
        </table>)
}
export default ShowBids;



