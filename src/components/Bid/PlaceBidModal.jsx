import React from 'react';
import { placeBid} from '../../Service/BidService'

const display = {
    display: 'block'
};
const hide = {
    display: 'none'
};

export default class PlaceBidModal extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            toggle: false
        };

        this.handleBidAmountChange = this.handleBidAmountChange.bind(this);
        this.handleSubmissionOfBid = this.handleSubmissionOfBid.bind(this);
    }

    handleBidAmountChange(e){
        this.setState({
            [e.currentTarget.name]:e.currentTarget.value
        })
    }

    toggle(event) {
        this.setState((prevState) => ({
            toggle: !prevState.toggle
        }));
    }

    handleSubmissionOfBid(){
        const payloadForPlaceBid = {
            biddingUser:localStorage.getItem('UserId'),
            projectId:this.props.projectId,
            bidAmount:this.state.bidAmount
        }
        placeBid(payloadForPlaceBid).then(()=>{
            this.setState({isPlaceBidSuccess:true});
            this.toggle();
        }).catch((err)=>{
            console.log(err);
            this.setState({isPlaceBidSuccess:false});
        })
    }
    render() {
        var modal = [];
        const classNameForAlert = (this.state.isPlaceBidSuccess)?"alert alert-success":"alert alert-danger";
        const textForAlert = (this.state.isPlaceBidSuccess)?"Success!":"Something is not right";
        modal.push(
            <div key={this.props.projectId} className="modal-body" style={this.state.toggle ? display : hide}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalCenterTitle">Place your bid for this project</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true" onClick={this.toggle}>&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <input type="number" name="bidAmount" onChange={this.handleBidAmountChange}/>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.toggle}>Close</button>
                        <button type="button" className="btn btn-primary" onClick={this.handleSubmissionOfBid}>Place</button>
                    </div>
                </div>
            </div>
        );
        return (
            <div>
                {modal}
                {!this.state.toggle?<button type="button" onClick={this.toggle} className="btn btn-primary">Place Bid</button>:null}
                {this.state.isPlaceBidSuccess && <div className={classNameForAlert}>{textForAlert} </div>}
            </div>
        );
    }
}