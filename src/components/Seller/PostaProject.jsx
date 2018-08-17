import React from 'react';
import FormErrors from '../genericComponents/FormErrors';
import {postProjectBySeller} from '../../Service/Seller'

export default class PostaProject extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: '',
            description: '',
            bidStartTime: '',
            bidEndTime: '',
            projectDeliveryDate: '',
            formErrors: []
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(event) {
        event.preventDefault();
        const name = event.currentTarget.name;
        const value = event.target.value;
        this.setState({[name]: value});
    }

    handleSubmit(){


        if(this.validateForm()){
            return;
        }

        const userId = localStorage.getItem("UserId");
        const payLoad ={
            title:this.state.title,
            description:this.state.description,
            biddingStartTime:this.state.bidStartTime,
            biddingEndTime:this.state.bidEndTime,
            projectDeliveryDate: this.state.projectDeliveryDate

        };
        postProjectBySeller(userId, payLoad).then((response)=>{
            console.log(response.data);
            this.setState({isPostingProjectSuccess:true})
        }).catch((err)=>{
            console.error(err);
            this.setState({isPostingProjectSuccess:false})
        });

    }

    validateForm() {

        const  bidStartTimeStamp = new Date(this.state.bidStartTime).getTime();
        const  bidEndTimeStamp = new Date(this.state.bidEndTime).getTime();
        const  projectDeliveryDateTimeStamp = new Date(this.state.projectDeliveryDate).getTime();

        const fieldsWithErrors = Object.keys(this.state).filter((field)=>this.state[field] === '');


        if(bidEndTimeStamp < bidStartTimeStamp){
            fieldsWithErrors.push('bidEndTime');
            fieldsWithErrors.push('bidStartTime');
        }

        if(projectDeliveryDateTimeStamp <= bidEndTimeStamp && projectDeliveryDateTimeStamp <= bidStartTimeStamp){
            fieldsWithErrors.push('bidEndTime');
            fieldsWithErrors.push('bidStartTime');
            fieldsWithErrors.push('projectDeliveryDate');
        }

        this.setState({formErrors:fieldsWithErrors});

        return fieldsWithErrors.length > 0;

    }

    render() {
        const classNameForAlert = (this.state.isPostingProjectSuccess)?"alert alert-success":"alert alert-danger";
        const textForAlert = (this.state.isPostingProjectSuccess)?"Success!":"Something is not right";

        return (
            <form>
                {this.state.isPostingProjectSuccess && <div className={classNameForAlert}>{textForAlert} </div>}
                <div>
                    {<FormErrors formErrors={this.state.formErrors}/>}
                </div>
                <div className="col-md-6 form-group row">
                    <div className="form-group col-md-4 row">
                        <label htmlFor="title" className="col-form-label">Title</label>
                        <input type="text" name="title" className="form-control" placeholder="title"
                               onChange={this.handleInput} pattern="[A-Za-z]+"/>
                    </div>
                </div>
                <div className="form-group col-md-4 row">
                    <label htmlFor="description" className="col-form-label">Description</label>
                    <textarea type="text" name="description" className="form-control" placeholder="Description"
                              onChange={this.handleInput} pattern="[A-Za-z]+"/>
                </div>

                <div className="form-group col-md-4 row">
                    <label htmlFor="bidStartTime" className="col-form-label">Bid Start Date</label>
                    <input type="date" name="bidStartTime" className="form-control" onChange={this.handleInput}/>
                </div>
                <div className="form-group col-md-4 row">
                    <label htmlFor="bidEndTime" className="col-form-label">Bid End Time</label>
                    <input type="date" name="bidEndTime" className="form-control" onChange={this.handleInput}/>
                </div>
                <div className="form-group col-md-4 row">
                    <label htmlFor="projectDeliveryDate" className="col-form-label">Project Delivery Date</label>
                    <input type="date" name="projectDeliveryDate" className="form-control" onChange={this.handleInput}/>
                </div>
                <div className="form-group row">
                    <div className="col-sm-10">
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmit}>Post Project</button>
                    </div>
                </div>
            </form>
        )
    }
}