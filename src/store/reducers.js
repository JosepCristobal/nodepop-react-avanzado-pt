import {
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_FAILURE,
    AUTH_LOGOUT,
    ADVERTS_LOADED_REQUEST,
    ADVERTS_LOADED_SUCCESS,
    ADVERTS_LOADED_FAILURE,
    ADVERTS_CREATED_REQUEST,
    ADVERTS_CREATED_SUCCESS,
    ADVERTS_CREATED_FAILURE,
    UI_RESET_ERROR,
    ADVERTS_DETAIL_SUCCESS,
    AUTH_LOGIN,
  } from './types';
  
export const initialState = {
auth: false,
adverts: {
    loaded: false,
    data: [],
},
ui: {
    loading: false,
    error: null,
},
};

function reducer(state = initialState, action){
    switch (action.type){
        case AUTH_LOGIN:
            return {...state, auth: true};
        case AUTH_LOGOUT:
            return {...state, auth: false};
        default:
            return state;
    }
}

// export function auth(state = initialState.auth, action) {
//     switch (action.type) {
//         case AUTH_LOGIN_SUCCESS:
//         return true;
//         case AUTH_LOGOUT:
//         return false;
//         default:
//         return state;
//     }
// }

export default reducer;