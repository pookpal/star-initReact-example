
import React from 'react';
import ReactDOM from 'react-dom';


// 引入React-Router模块
import { Router  ,hashHistory} from 'react-router';
import routes from '../route';


// 自定义less改变ant默认theme或者增添全局的样式
import '../styles/index.less';

import 'animate.css/animate.min.css';

// 引入垫片兼容IE
require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');



// ----------------------
//  redux
// ----------------------

import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';



import configureStore from '../store/configureStore';

const store = configureStore();



// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store);


console.log(store.getState());


const targetDom = document.getElementById("pookpal");


ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>

    ,targetDom
);
