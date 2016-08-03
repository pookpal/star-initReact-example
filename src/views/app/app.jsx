/**
 * Created by lijie on 16/7/7.
 */

import React, { Component } from 'react';

import Header from '../../components/Header/header.jsx';

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(

            <div>

                <Header />

                <div className="ant-layout-wrapper">

                    {this.props.children}

                </div>

            </div>
        )
    }

}