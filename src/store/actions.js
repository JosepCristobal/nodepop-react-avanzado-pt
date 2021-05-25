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
  } from './types';

  export const authLogin = () => {
    return {
      type: AUTH_LOGIN,
    };
  };

  export const authLogout = () => {
    return {
      type: AUTH_LOGOUT,
    };
  };