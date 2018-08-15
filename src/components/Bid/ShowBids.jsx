import React from 'react';


const ShowBids = ({bids})=>{
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
            { bids.map((bid,idx)=>{
                return(<tr key={idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{bid.projectTitle}</td>
                    <td>{bid.bidTime}</td>
                    <td>{bid.bidAmount}</td>
                </tr>);
            })}
            </tbody>
        </table>)
}
export default ShowBids;



