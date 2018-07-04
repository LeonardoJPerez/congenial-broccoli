import {SIGNUP_FORM, SIGNUP_AVATAR_CHANGE} from '../actionTypes';

export default function reducer(state = {
    user: {}
}, action) {
    switch (action.type) {
        case SIGNUP_FORM:
            return {
                ...state,
                user: action.payload.user
            };
        case SIGNUP_AVATAR_CHANGE:
            return state;
        default:
            return state;
    }
}
