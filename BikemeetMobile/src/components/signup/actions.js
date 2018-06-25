import {INIT, AVATAR_CHANGE} from './reducer';

export function initialize(user) {
    return {
        type: INIT,
        payload: {
            request: {
                url: `/users/${user}/repos`
            }
        }
    };
}

export function changeAvatar(){    
    return {
        type: AVATAR_CHANGE,
        payload: {             
        }
    };
}