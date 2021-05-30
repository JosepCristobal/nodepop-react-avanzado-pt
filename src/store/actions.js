import { getAdvertsLoaded , getTagsLoaded, getAdvertDetailSelector} from './selectors';
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
  ADVERTS_DETAIL_FAILURE,
  //ADVERTS_LOADED,
  ADVERTS_CREATED,
  TAGS_LOADED_REQUEST,
  TAGS_LOADED_SUCCESS,
  TAGS_LOADED_FAILURE,
  ADVERT_DELETE_SUCCESS,
  ADVERT_DELETE_FAILURE,
} from './types';

//Login
export const authLoginRequest = () => {
  return {
    type: AUTH_LOGIN_REQUEST,
  };
};

export const authLoginSuccess  = () => {
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
      dispatch(authLoginSuccess());
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
    //const advertsLoaded = getAdvertsLoaded(getState())
    // Podríamos llamar al getState para saber si se han cargado los anuncios o no
    // y evitar volver a llamar al API para volver a cargar los anuncios.
    // En este caso he preferido hacer la llamada al API para cargar todos los anuncios nuevos
    // que hayan podido generar otros usuarios.
    
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
    const tagsLoaded = getTagsLoaded(getState())
    //Si los tags se han cargado una vez, no los volvemos a cargar, los recuperamos de redux
    //console.log('Los tags cargados son:', tagsLoaded)
    if (tagsLoaded>0) {
      
      return};
    
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

//Create advert
export const advertCreatedRequest = () => {
  return {
    type: ADVERTS_CREATED_REQUEST,
  };
};

export const advertCreatedSuccess  = (advert) => {
  return {
    type: ADVERTS_CREATED_SUCCESS,
    payload: advert,
  };
};

export const advertCreatedFailure = (error) => {
  return {
    type: ADVERTS_CREATED_FAILURE,
    payload: error,
    error: true,
  };
};

//Creamos en thunk de nuevo anuncio
export const advertCreatedAction = (advert) =>{
  return async function (dispatch, getState, { api, history }){
    dispatch(advertCreatedRequest())
    try {
      const advertCreated = await api.adverts.createAdvertPhoto(advert)
      dispatch(advertCreatedSuccess(advertCreated));
      history.push(`/adverts/${advertCreated.id}`)
      return advertCreated;

    } catch (error) {
      dispatch(advertCreatedFailure(error))
      history.push("/login")
    }
  }
}

//Delete Advert

export const advertDeletedSuccess  = (advertId) => {
  return {
    type: ADVERT_DELETE_SUCCESS,
    payload: true,
  };
};

export const advertDeletedFailure  = (error) => {
  return {
    type: ADVERT_DELETE_FAILURE,
    payload: error,
    error: true,
  };
};

//Creamos en thunk del borrado del anuncio anuncio
export const advertDeledAction = (advertId) =>{
  return async function (dispatch, getState, { api, history }){
    try {
      const advertDel = await api.adverts.deleteAdvert(advertId);
      dispatch(advertDeletedSuccess(advertDel));
      history.push(`/adverts/`)
      return advertDel;

    } catch (error) {
      dispatch(advertDeletedFailure(error))
      history.push("/login")
    }
  }
}




//Detai Adverts
export const advertsDeatilSuccess = advert => {
  return {
    type: ADVERTS_DETAIL_SUCCESS,
    payload: advert,
  };
};
export const advertsDetailFailure = (error) =>{
  return {
    type: ADVERTS_DETAIL_FAILURE,
    payload: error,
    error: true,
  };
}

export const advertsDetailAction = (advertId) => {
  return async function (dispatch, getState, {api, history}){
    const advertLoaded = getAdvertDetailSelector(advertId)(getState())
    //console.log('Llegamos a advertsDetailAction Sin acceso al api ', advertLoaded)
    if (advertLoaded){
      return;
    }
    try {
      const advert = await api.adverts.getAdvertDetail(advertId)
      dispatch(advertsDeatilSuccess(advert));
      return advert
    } catch (error) {
      dispatch (advertsDetailFailure(error))
    } 
  }
}

export const resetError = () => {
  return {
    type: UI_RESET_ERROR,
  };
}