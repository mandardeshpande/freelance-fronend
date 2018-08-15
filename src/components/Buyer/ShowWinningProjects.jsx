import React from 'react';
import Moment from 'react-moment'


const ShowWinningProjects = ({winningProjects})=>{
    return (winningProjects.length > 0 && <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Project Title</th>
                <th scope="col">Project Owner's FirstName</th>
                <th scope="col">Project Delivery Time</th>
            </tr>
            </thead>
            <tbody>
            { winningProjects.map((project,idx)=>{
                return(<tr key={idx}>
                    <th scope="row">{idx + 1}</th>
                    <td>{project.projectTitle}</td>
                    <td>{project.projectSellerFirstName}</td>
                    <td><Moment>{project.projectDeliveryDate}</Moment></td>
                </tr>);
            })}
            </tbody>
        </table>)
}
export default ShowWinningProjects;



