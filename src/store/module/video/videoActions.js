/**
 * Created by lijie on 16/7/21.
 */

import { createAction } from 'redux-actions';


import * as constant from './videoConstants';


export function addVideo(video) {
    return {
        type: constant.ADD_VIDEO,
        video
    }
}

//删除 item 只需要拿到它的 id
export function deleteItem(id) {
    return {
        type: constant.DEL_VIDEO,
        id
    }
}

