import React from 'react';
import Tabs from '../genericComponents/Tabs';
import Content from '../genericComponents/Content';
import ShowBids from '../Bid/ShowBids';
import {bids} from "../fixtures/bids_user";
import PostaProject from "./PostaProject";
import ProjectPostedBySeller from "./ProjectPostedBySeller";
import {getAllBidForProjectBySeller} from '../../Service/Seller'


export default class SellerDashBoard extends React.Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.tabData = [
            {name: 'Home', isActive: true, scene: <ShowBids/>},
            {name: 'Projects Posted', isActive: false, scene: <ProjectPostedBySeller/>},
            {name: 'Post a Project', isActive: false, scene: <PostaProject/>}
        ];

        this.state = {
            activeTab: this.tabData[0],
            isLoading: true,
            bids
        }
    }

    componentDidMount() {
        const userId = localStorage.getItem("UserId");
        getAllBidForProjectBySeller(userId).then(response=>{
            this.setState({bids:response.data, isLoading: false});
        })

    }


    handleClick(tab) {
        this.setState({activeTab: tab});
    }


    render() {
        const scene = this.tabData.filter(e => e.name === this.state.activeTab.name)[0];
        let sceneWithProps = scene.scene;


        if (scene.name === 'Home') {
            sceneWithProps = <ShowBids bids={this.state.bids}/>
        }


        return (!this.state.isLoading && <div className="card-body">
            <Tabs tabsData={this.tabData} activeTab={this.state.activeTab} changeTab={this.handleClick}/>
            <Content activeTab={this.state.activeTab}>
                {sceneWithProps}
            </Content>
        </div>);
    }
}