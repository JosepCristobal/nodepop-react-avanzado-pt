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
  //ADVERTS_LOADED,
  ADVERTS_CREATED,
  TAGS_LOADED_REQUEST,
  TAGS_LOADED_SUCCESS,
  TAGS_LOADED_FAILURE,
} from './types';

//Login
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

//thunk login
export const loginAction = credentials => {
  return async function(dispatch, getState, { api, history }){
    dispatch(authLoginRequest());
    
    try {
      await api.auth.login(credentials);
      //isLogged.current = true;
      dispatch(authLoginSucces());
      const { from } = history.location.state || { from: { pathname: '/' } };
      history.replace(from);
    } catch (error) {
      dispatch(authLoginFailure(error));
    } 

  }   
};

// Logout
export const authLogout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

//Adverts
export const advertsLoadedRequest = () =>{
  return {
    type: ADVERTS_LOADED_REQUEST,
  };
};

export const advertsLoadedSuccess = adverts => {
  return{
    type: ADVERTS_LOADED_SUCCESS,
    payload: adverts,
  }
}

export const advertsLoadedFailure = error => {
  return {
    type: ADVERTS_LOADED_FAILURE,
    payload: error,
    error: true,
  };
};

//Creamos en thunk de adverts
export const advertsLoadAction = () =>{
  return async function (dispatch,getState, { api }){
    dispatch(advertsLoadedRequest())
    try {
      const adverts = await api.adverts.getLatestAdverts()
      dispatch(advertsLoadedSuccess(adverts))

    } catch (error) {
      dispatch(advertsLoadedFailure(error))
    }
  }
}

//TAGS
export const tagsLoadedRequest = () =>{
  return {
    type: TAGS_LOADED_REQUEST,
  };
};

export const tagsLoadedSuccess = tags => {
  return{
    type: TAGS_LOADED_SUCCESS,
    payload: tags,
  }
}

export const tagsLoadedFailure = error => {
  return {
    type: TAGS_LOADED_FAILURE,
    payload: error,
    error: true,
  };
};

//Creamos en thunk de tags
export const tagsLoadAction = () =>{
  return async function (dispatch,getState, { api }){
    dispatch(tagsLoadedRequest())
    try {
      const tags = await api.tags.getTagsAdverts()
      dispatch(tagsLoadedSuccess(tags))

    } catch (error) {
      dispatch(tagsLoadedFailure(error))
    }
  }
}




export const advertsCreated = advert => {
  return{
    type: ADVERTS_CREATED,
    payload: {
        ... advert
      },
  }
}

export const resetError = () => {
  return {
    type: UI_RESET_ERROR,
  };
}