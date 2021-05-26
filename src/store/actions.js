import {
    AUTH_LOGIN,
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
    ADVERTS_LOADED,
    ADVERTS_CREATED,
  } from './types';

  export const authLoginRequest = () => {
    return {
      type: AUTH_LOGIN_REQUEST,
    };
  };

  export const authLoginSucces  = () => {
    return {
      type: AUTH_LOGIN_SUCCESS,
    };
  };

  export const authLoginFailure = (error) => {
    return {
      type: AUTH_LOGIN_FAILURE,
      payload: error,
      error: true,
    };
  };

  export const authLogout = () => {
    return {
      type: AUTH_LOGOUT,
    };
  };

  export const advertsLoaded = adverts => {
    return{
      type: ADVERTS_LOADED,
      payload: adverts,
    }
  }

  export const advertsCreated = advert => {
    return{
      type: ADVERTS_CREATED,
      payload: {
          ... advert, 
          user:{}, 
          likes:[]
        },
    }
  }

  export const resetError = () => {
    return {
      type: UI_RESET_ERROR,
    };
  }