/**
 * Created by lijie on 16/7/6.
 */

import React, { Component } from 'react';

import { Button, Form, Input, message } from 'antd';

const FormItem = Form.Item;

import { Link, hashHistory} from 'react-router';

import styles from './login.less';

function noop() {
    return false;
}


//import './login.less';

 class Login extends Component {


    constructor(pros) {
        super(pros);
    }

    submitLogin(e) {
        e.preventDefault();
        let loginInfo = this.props.form.getFieldsValue();

        if(loginInfo.userName !='admin' || loginInfo.password !='123456' ){
            message.error('登录账号错误,请重新登录!(admin,123456)');
        }else{
            hashHistory.push('/app');
        }
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
        const { getFieldProps } = this.props.form;
        var documentHeight = this.state.height - 64;

        return(
            <div className={styles.loginBg} style={{minHeight: documentHeight}}>
                <div className={styles.login_header}>

                    <div className={styles.login_header_nav}>

                        <h1 className='pull-left'>
                            <a href="#" target="_self" className={styles.my_logo}>
                                <img src="./assets/images/logo.png" alt="" style={{height:55}}/>
                            </a>
                        </h1>
                        <div className="pull-right">
                            <ul className="my-nav">


                            </ul>
                        </div>
                    </div>
                </div>


                <div className={styles.login_content}>

                    <section className={styles.login_form}>

                        <div className={styles.login_title}>
                            <div>
                                <img src="./assets/images/logo.png" alt="" style={{height:40}}/>
                            </div>

                            <h2 style={{fontSize:'18px',color:'#666666'}}>欢迎登录四达云管理平台</h2>

                        </div>

                        <div className={styles.login_input}>


                            <Form horizontal>


                                <FormItem

                                >
                                    <Input type="text"
                                           {...getFieldProps('userName')}
                                           placeholder="账户"
                                           style={{height:38}} />
                                </FormItem>

                                <FormItem
                                >
                                    <Input  type="password"
                                            {...getFieldProps('password')}
                                            autoComplete="off"
                                            placeholder="密码"
                                            style={{height:38}}
                                            onContextMenu={noop}
                                            onPaste={noop}
                                            onCopy={noop}
                                            onCut={noop}
                                    />
                                </FormItem>

                                <FormItem>


                                        <Button type="primary" style={{width:"100%",height:38,fontSize:16}}
                                            onClick={this.submitLogin.bind(this)}
                                        >
                                            登录
                                        </Button>

                                    </FormItem>

                                </Form>


                        </div>


                    </section>

                </div>



            </div>
        );
    }
}

Login = Form.create()(Login);

export default Login;