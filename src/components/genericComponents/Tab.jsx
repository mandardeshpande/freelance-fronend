import React from 'react';

export default class Tab extends React.Component {
    render() {
        return (
            <li className="nav-item" onClick={this.props.handleClick}>
                <a className={this.props.isActive ? " nav-link active" : "nav-link"}>{this.props.data.name}</a>
            </li>
        );
    }
};