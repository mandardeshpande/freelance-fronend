import React from 'react';
import {projectsPosted} from "../fixtures/projects_posted";
import PlaceBidModal from '../Bid/PlaceBidModal';




export default class Project extends React.Component{

    constructor(props){
        super(props);

        this.state={
            postedProjects: projectsPosted
        }
    }

    render(){
        return(
            this.state.postedProjects.map((project,idx)=>{
                return (<div  key={idx} className="row">
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{project.title}</h5>
                            <p className="card-text">{project.description}</p>
                            <PlaceBidModal projectId={project.project_id}/>
                        </div>
                    </div>
                </div>
            </div>)})
        );
    }
}