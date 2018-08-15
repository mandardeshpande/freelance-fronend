import React from 'react';
import Project from '../Buyer/Project';
import Tabs from '../genericComponents/Tabs';
import Content from '../genericComponents/Content';
import ShowBids from '../Bid/ShowBids';
import {bids} from "../fixtures/bids_user";
import PostaProject from "./PostaProject";
import getAllProjectsPostedBySeller from '../../Service/Seller'




export default class SellerDashBoard extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.tabData =  [
            { name: 'Home', isActive: true , scene:<ShowBids/>},
            { name: 'Projects Posted', isActive: false, scene:<Project/> },
            { name: 'Post a Project', isActive: false, scene:<PostaProject/> }
        ];

        this.state = {
            activeTab: this.tabData[0],
            isLoading:true,
            bids
        }
    }

    componentDidMount(){

        getAllProjectsPostedBySeller().then((response)=>{
            console.log(response.data);
        });
        this.setState({bids, isLoading:false})
    }


    handleClick(tab) {
        this.setState({activeTab: tab});
    }


    render() {
        const scene = this.tabData.filter(e=>e.name === this.state.activeTab.name)[0];
        let sceneWithProps = scene.scene;


        if(scene.name === 'Home'){
            sceneWithProps = <ShowBids bids={this.state.bids}/>
        }


        return ( !this.state.isLoading && <div className="card-body">
            <Tabs tabsData={this.tabData} activeTab={this.state.activeTab} changeTab={this.handleClick} />
            <Content activeTab={this.state.activeTab}>
                {sceneWithProps}
            </Content>
        </div>);
    }
}