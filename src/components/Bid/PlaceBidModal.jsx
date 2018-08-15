import React from 'react';


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
    render() {
        var modal = [];
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
                        <button type="button" className="btn btn-primary" onClick={this.toggle}>Place</button>
                    </div>
                </div>
            </div>
        );
        return (
            <div>
                {modal}
                {!this.state.toggle?<button type="button" onClick={this.toggle} className="btn btn-primary">Place Bid</button>:null}
            </div>
        );
    }
}