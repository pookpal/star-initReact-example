/**
 * Created by lijie on 16/7/7.
 */

import React, { Component } from 'react';
import Progress from "../components/Lib/ReactProcessLoadingBar";



// 国际化文件
import {  IntlProvider, addLocaleData } from 'react-intl';
const appLocale = window.appLocale;
addLocaleData(appLocale.data);

// 引入Antd组件
import { LocaleProvider } from 'antd';

// 配置整体组件
export default class Init extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
            <LocaleProvider locale={appLocale.antd}>
                <IntlProvider locale={appLocale.locale} messages={appLocale.messages}>

                    <div className="ant-layout">
                        <Progress.Component/>
                        {this.props.children}
                    </div>

                </IntlProvider>
            </LocaleProvider>

    )
  }
}
