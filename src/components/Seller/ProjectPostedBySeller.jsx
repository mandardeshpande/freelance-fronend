import React from 'react';
import {projectsPosted} from "../fixtures/projects_posted";
import { getAllProjectsPostedBySeller } from "../../Service/Seller";




export default class ProjectPostedBySeller extends React.Component{

    constructor(props){
        super(props);

        this.state={
            postedProjects: projectsPosted
        }
    }

    componentDidMount(){
        const userId = localStorage.getItem("UserId");
        getAllProjectsPostedBySeller(userId).then((response) => {
            this.setState({postedProjects:response.data});
        });
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
                        </div>
                    </div>
                </div>
            </div>)})
        );
    }
}