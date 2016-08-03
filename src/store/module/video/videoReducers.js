/**
 * Created by lijie on 16/7/21.
 */


import * as constant from './videoConstants';

const VideoState = [];

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function videoReducers(state = VideoState, action) {

    switch (action.type) {

        case constant.ADD_VIDEO:
            return [...state,action.video];


        default:
            return {...state};
    }
}

