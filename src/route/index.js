/**
 * Created by lijie on 16/7/14.
 */

import React from 'react';
import { Route, IndexRoute } from 'react-router';


// 引入

import Init from '../views/init.jsx'; // 初始化入口页面

import App from '../views/app/app.jsx'; //后台管理

import Login from '../views/login/login.jsx';//登录页

import NotFoundPage from '../views/app/NotFoundPage';




import Video from '../views/video/video.jsx';
import ContentLists from '../views/video/content/content.lists.jsx';
import ContentPackageLists from '../views/video/contentPackage/contentPackage.lists.jsx';


import Application from '../views/application/application.jsx';
import Cascader1 from '../views/application/form/cascader.jsx';
import Transfer1 from '../views/application/form/transfer.jsx';


import Chart from '../views/chart/chart.jsx';
import Chart1 from '../views/chart/chart1.jsx';
import Chart2 from '../views/chart/chart2.jsx';
import Chart3 from '../views/chart/chart3.jsx';
import Chart4 from '../views/chart/chart4.jsx';


import System from '../views/others/system';


import ReduxCom from '../views/redux/redux';
import ReduxCom1 from '../views/redux/example/redux1';

const routes =(

    <Route path="/" component={Init} >

        <IndexRoute component={Login}/>




        <Route path="login" component={Login} />

        <Route path="app" component={App}>
            <IndexRoute component={Video}/>
            <Route path="video" component={Video}>

                <IndexRoute component={ContentLists}/>
                <Route path="contentlists" component={ContentLists} />
                <Route path="contentpackagelists" component={ContentPackageLists} />

            </Route>
            <Route path="chart" component={Chart}>

                <IndexRoute component={Chart1}/>
                <Route path="chart1" component={Chart1} />
                <Route path="chart2" component={Chart2} />
                <Route path="chart3" component={Chart3} />
                <Route path="chart4" component={Chart4} />

            </Route>

            <Route path="application" component={Application} >

                <IndexRoute component={ContentPackageLists}/>
                <Route path="contentPackageLists" component={ContentPackageLists} />
                <Route path="cascader" component={Cascader1} />
                <Route path="transfer" component={Transfer1} />
                <Route path="chart2" component={Chart2} />
                <Route path="chart3" component={Chart3} />
            </Route>

            <Route path="redux" component={ReduxCom}>

                <Route path="redux1" component={ReduxCom1} />
            </Route>

            <Route path="system" component={System} />

        </Route>

        <Route path="*" component={NotFoundPage} />

    </Route>
);


export default routes;