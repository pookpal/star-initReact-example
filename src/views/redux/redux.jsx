/**
 * Created by lijie on 16/7/6.
 */

import React, { Component } from 'react';

import { Link } from 'react-router';

import { Menu, Icon} from 'antd';



const SubMenu = Menu.SubMenu;


export default class ReduxCom1 extends Component {

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
                    <Menu mode="inline"
                          style={{minHeight: documentHeight}}
                          defaultOpenKeys={['sub1','sub2']}
                    >
                        <SubMenu key="sub1" title={<span><Icon type="neirong" />Redux</span>}>

                            <Menu.Item key="1">

                                <Link to="/app/redux/redux1">
                                    counter
                                </Link>

                            </Menu.Item>

                            <Menu.Item key="2">
                                <Link to="/app/redux/redux2">
                                    表单2
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
