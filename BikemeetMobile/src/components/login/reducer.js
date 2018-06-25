export const INIT = 'signup/INIT';
export const AVATAR_CHANGE = 'signup/AVATAR_CHANGE';

export default function reducer(state = {
    user: {}
}, action) {
    switch (action.type) {
        case INIT:
            return {
                ...state,
                user: action.payload.user
            };
        case AVATAR_CHANGE:
            return state;
        default:
            return state;
    }
}
