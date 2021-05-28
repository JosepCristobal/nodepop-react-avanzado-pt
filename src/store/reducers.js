import { combineReducers} from 'react-redux';

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
    ADVERTS_LOADED,
    ADVERTS_CREATED,
  } from './types';
  
export const initialState = {
    auth: false,
    adverts: [],
    ui: {
        loading: false,
        error: null,
    },
};



// function reducer(state = initialState, action){
//     switch (action.type){
//         case AUTH_LOGIN:
//             return {...state, auth: true};
//         case AUTH_LOGOUT:
//             return {...state, auth: false};
//         case ADVERTS_LOADED:
//             return {...state, adverts: action.payload.adverts};
//         case ADVERTS_CREATED:
//             return {...state, adverts: state.adverts.concat(action.payload.advert) };
//         default:
//             return state;
//     }
// }

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
export function auth(state = initialState.auth, action){
    switch (action.type) {
        case AUTH_LOGIN_SUCCESS:
        return true;
        case AUTH_LOGOUT:
        return false;
        default:
        return state;
    }
}

export function adverts(state = initialState.adverts, action){
    switch (action.type){
        case ADVERTS_LOADED_SUCCESS:
            return action.payload;
        case ADVERTS_CREATED:
            return [...state, action.payload];
        default:
            return state;
    }
}

export function ui(state = initialState.ui, action) {
    if (action.error){
        return { ...state,loading: false,error: action.payload};
    }
    switch (action.type){
        case AUTH_LOGIN_REQUEST:
        case ADVERTS_LOADED_REQUEST:
            return { ...state,loading: true};
        case AUTH_LOGIN_SUCCESS:
        case ADVERTS_LOADED_SUCCESS:
            return { ...state,loading: false};
        case UI_RESET_ERROR:
            return { ...state, error: null,};
        default:
            return state;
    }
}

//export default reducer;