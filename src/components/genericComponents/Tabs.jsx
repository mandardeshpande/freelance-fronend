import React from 'react';
import Tab from './Tab'

export default class Tabs extends React.Component {

    render() {
        return (
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                {this.props.tabsData.map((tab,idx)=> {
                    return (
                        <Tab key={idx} data={tab} isActive={this.props.activeTab === tab}
                             handleClick={this.props.changeTab.bind(this, tab)}/>
                    );
                })}
            </ul>
        );
    }
}