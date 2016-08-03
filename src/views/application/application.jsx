/**
 * Created by lijie on 16/7/6.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';


import { Menu, Icon} from 'antd';

import './application.less'

const SubMenu = Menu.SubMenu;

export default class Application extends Component {

    constructor(pros) {
        super(pros);

    }

    componentWillMount(){
        this.setState({
            height: document.body.clientHeight
        });
    }

    componentDidMount(){
        window.addEventListener('resize', () => {
            this.setState({
                height: document.body.clientHeight
            });
        });
    }

    render() {

        var documentHeight = this.state.height - 64;

        return(

            <div className="ant-layout-container">
                <aside className="left-menu-sider">
                    <Menu mode="inline"
                          style={{minHeight: documentHeight}}
                          defaultOpenKeys={['sub1','sub2']}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="neirong" />表单示例</span>}>

                            <Menu.Item key="3">

                                <Link to="/app/application/contentPackageLists">
                                    表单示例
                                </Link>

                            </Menu.Item>


                            <Menu.Item key="1">

                                <Link to="/app/application/cascader">
                                    级联|评分|树选择
                                </Link>

                            </Menu.Item>

                            <Menu.Item key="2">
                                <Link to="/app/application/transfer">
                                  其他组件
                                </Link>
                            </Menu.Item>
                        </SubMenu>


                    </Menu>
                </aside>

                <div className='right-content-body'>
                    <div className="ant-row">
                        <div className="ant-col-md-24" style={{clear: 'both'}}>
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
