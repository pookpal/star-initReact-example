/**
 * Created by lijie on 16/7/6.
 */

import React, { Component } from 'react';
import { Link } from 'react-router';

import { Menu, Icon} from 'antd';



const SubMenu = Menu.SubMenu;


export default class Chart extends Component {

    constructor(pros) {
        super(pros);

    }

    componentWillMount(){
        this.setState({
            height: document.body.clientHeight
        });
    }
    // 自动获取浏览器可视区域高度

    autoHeigth(){
        this.setState({
            height: document.body.clientHeight
        });
    }

    componentDidMount(){
        // 监听window窗口变化,自动调整左侧菜单的高度
        window.addEventListener('resize', this.autoHeigth.bind(this));
    }

    componentWillUnmount(){
        // 组件注销时,移除window的resize事件监听,释放浏览器内存
        window.removeEventListener('resize',this.autoHeigth.bind(this));
    }

    render() {

        var documentHeight = this.state.height - 64;

        return(

            <div className="ant-layout-container">
                <aside className="left-menu-sider">
                    <Menu
                        mode="inline"
                        style={{minHeight: documentHeight}}
                        defaultOpenKeys={['sub1']}

                    >
                        <SubMenu key="sub1" title={<span><Icon type="user" />图表demo</span>}>

                            <Menu.Item key="1">

                                <Link to="/app/chart/chart1">
                                    柱状图
                                </Link>

                            </Menu.Item>

                            <Menu.Item key="2">
                                <Link to="/app/chart/chart2">
                                    散点图
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="3">
                                <Link to="/app/chart/chart3">
                                    折线图
                                </Link>
                            </Menu.Item>

                            <Menu.Item key="4">
                                <Link to="/app/chart/chart4">
                                    北京常住人口
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