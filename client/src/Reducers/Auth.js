import { CHANGE_LOGIN_STATUS } from '../Actions/Types';

const initialState = {
    isAuth: localStorage.getItem('isAuth') || false,
    token: localStorage.getItem('token') || null,
    userId: localStorage.getItem('userId') || null,
    userName: localStorage.getItem('userName') || ''
};

const auth = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOGIN_STATUS:
            return {
                isAuth: action.payload.isAuth,
                token: action.payload.token,
                userId: action.payload.userId,
                userName: action.payload.userName
            };
        default: return state;
    }
};

export default auth;