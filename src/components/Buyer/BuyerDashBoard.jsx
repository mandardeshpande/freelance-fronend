import React from 'react';
import Project from "./Project";
import Tabs from '../genericComponents/Tabs';
import Content from '../genericComponents/Content';
import ShowBids from "../Bid/ShowBids";
import { winningBids }from '../fixtures/winningBids'
import { bids }from '../fixtures/bids_user'
import {getAllProjectPosted} from "../../Service/BuyerService";


export default class BuyerDashBoard extends React.Component{

    constructor(props){
        super(props);

        this.handleClick = this.handleClick.bind(this);

        this.tabData =  [
            { name: 'Home', isActive: true , scene:<Project />, sceneData:null},
            { name: 'Bids', isActive: false, scene:<ShowBids />, sceneData:null},
            { name: 'Bids Won', isActive: false, scene:<ShowBids />, sceneData:null}
        ];

        this.state = {
            activeTab: this.tabData[0],
            isLoading:true
        }
    }

    componentDidMount(){

        getAllProjectPosted().then((response)=>{
            this.setState({postedProject:response.data,bids,winningBids,isLoading:false})
        }).catch((err)=>{
            console.error(err);
        })
    }

    handleClick(tab) {
        this.setState({activeTab: tab});
    }


    render() {
        const scene = this.tabData.filter(e=>e.name === this.state.activeTab.name)[0];
        let sceneWithProps = scene.scene;

        if(scene.name === 'Home'){
            sceneWithProps = <Project projects={this.state.postedProject}/>
        }

        if(scene.name === 'Bids'){
            sceneWithProps = <ShowBids bids={this.state.bids}/>
        }

        if(scene.name === 'Bids Won'){
            sceneWithProps = <ShowBids bids={this.state.winningBids}/>
        }


        return (!this.state.isLoading && <div className="card-body">
            <Tabs tabsData={this.tabData} activeTab={this.state.activeTab} changeTab={this.handleClick} />
            <Content activeTab={this.state.activeTab}>
                {sceneWithProps}
            </Content>
        </div>);
    }
}