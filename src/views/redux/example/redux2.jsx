import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { Table,Button,Modal,message,Upload, Icon, notification, Popconfirm, Tooltip } from 'antd';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


export default class ReduxCom2 extends Component {


    constructor(props) {
        super(props);
        this.state = {
            items: ['hello', 'world', 'click', 'me']
        };
    }

    handleAdd() {
        var newItems =this.state.items.concat([prompt('Enter some text')]);
        this.setState({items: newItems});
    }

    handleRemove(i) {
        var newItems = this.state.items.slice();
        newItems.splice(i, 1);
        this.setState({items: newItems});
    }

    render() {
        var items = this.state.items.map(function (item, i) {
            return (
                <div key={item} onClick={this.handleRemove.bind(this, i)}>
                    {item}
                </div>
            );
        }.bind(this));

        return (
            <div>
                <button onClick={this.handleAdd.bind(this)}>Add Item</button>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {items}
                </ReactCSSTransitionGroup>
            </div>
        );

    }
}

