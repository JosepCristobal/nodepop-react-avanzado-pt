import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { LoginPage, PrivateRoute } from './components/auth';
import { AdvertsPage, NewAdvertPage, AdvertDetailPage } from './components/adverts';
import  { Redirect } from 'react-router-dom'

function App() {
  return (
    <div className="App">
       
       <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/adverts/:advertId">
            {routeProps => <AdvertDetailPage {...routeProps} />}
          </PrivateRoute>
          <PrivateRoute path="/advert">
            <NewAdvertPage />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <Redirect to='/adverts'  />
          </PrivateRoute>
          <PrivateRoute exact path="/adverts">
            <AdvertsPage />
          </PrivateRoute>
          <Route path="/404">
            <div
              style={{
                textAlign: 'center',
                fontSize: 48,
                fontWeight: 'bold',
              }}>
              404 | Not found page
            </div>
          </Route>
        </Switch>
       
    </div>
  );
}

export default App;
