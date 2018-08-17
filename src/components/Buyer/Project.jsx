import React from 'react';
import PlaceBidModal from '../Bid/PlaceBidModal';


const Project = ({projects}) => {

    if(projects.length === 0){
        return <div> No Projects to bid</div>
    }

    const project = projects.map((project, idx) => {
        return (<div className="col-sm-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <PlaceBidModal projectId={project.id}/>
                    </div>
                </div>
            </div>)
    });

    return (<div className="row">
        {project}
    </div>);
};

export default Project;