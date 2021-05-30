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
    //ADVERTS_LOADED,
    ADVERTS_CREATED,
    TAGS_LOADED_REQUEST,
    TAGS_LOADED_SUCCESS,
    ADVERT_DELETE_SUCCESS,
    
  } from './types';
  
export const initialState = {
    auth: false,
    adverts: [],
    tags: [],
    ui: {
        loading: false,
        error: null,
    },
    advertDel:true,
};


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
        case ADVERTS_CREATED_SUCCESS:
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
        case TAGS_LOADED_REQUEST:
        case ADVERTS_CREATED_REQUEST:
            return { ...state,loading: true};
        case AUTH_LOGIN_SUCCESS:
        case ADVERTS_LOADED_SUCCESS:
        case TAGS_LOADED_SUCCESS:
        case ADVERTS_CREATED_SUCCESS:
        case ADVERTS_DETAIL_SUCCESS:
            return { ...state,loading: false};
        case UI_RESET_ERROR:
            return { ...state, error: null,};
        default:
            return state;
    }
}

export function tags(state = initialState.tags, action){
    if (action.error){
        return { ...state,loading: false,error: action.payload};
    }
    switch (action.type){
        case TAGS_LOADED_SUCCESS:
            return action.payload;
        default:
            return state;
    };
}

export function advertDel(state = initialState.advertDel, action){
    if (action.error){
            return { ...state,loading: false,error: action.payload};
        }
    
    switch (action.type){
        case ADVERT_DELETE_SUCCESS:
            return true;
        default:
            return state;
    }
}

// export function advert (state = initialState.advert, action){
//     if (action.error){
//         return { ...state,loading: false,error: action.payload};
//     }
//     switch (action.type){
//         case ADVERTS_DETAIL_SUCCESS:
//             return [action.payload];
//         default:
//             return state;
//     };
// }
