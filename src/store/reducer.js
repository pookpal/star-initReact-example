/**
 * Created by lijie on 16/7/21.
 */


import { combineReducers } from 'redux';
import {routerReducer} from 'react-router-redux';


import videoReducers from './module/video/videoReducers';

import counter from './module/redux/counterReducer';


const rootReducer = combineReducers({
    videoReducers,
    counter,
    routing: routerReducer
});

export default rootReducer;
