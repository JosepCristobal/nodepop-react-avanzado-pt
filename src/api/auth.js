import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

export const login = (credentials) => {
  const {email, password,check} = credentials
  
  return client.post('/api/auth/login', {email, password}).then(({ accessToken }) => {
    configureClient({ accessToken });
    //Si nos han marcado el check de guardar el token, procederemos a ello
    if (check){
      //console.log(` Guardamos credenciales 1: ${check}`)
      storage.set('auth', accessToken);
    }else{
      storage.remove('auth');
    } 

  });
};

export const logout = () => {
  //return Promise.resolve().then(resetClient).then(storage.clear);
  return Promise.resolve().then(() => {
    resetClient();
    storage.remove('auth');
  });
};