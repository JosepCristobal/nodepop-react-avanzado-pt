import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import { LoginPage, PrivateRoute } from './components/auth';
import { AdvertsPage, NewAdvertPage, AdvertDetailPage } from './components/adverts';
import  { Redirect } from 'react-router-dom'
import NotFoundPage from './NotFoundPage';

function App() {
  return (
    <div className="App">
       
       <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <PrivateRoute exact path="/advert/new">
            <NewAdvertPage />
          </PrivateRoute>

          <PrivateRoute exact path="/adverts/:advertId">
            <AdvertDetailPage/>
            {/* {routeProps => <AdvertDetailPage {...routeProps} />} */}
          </PrivateRoute>

          <PrivateRoute exact path="/adverts">
            <AdvertsPage />
          </PrivateRoute>
         
          <Route exact path="/404">
            <NotFoundPage />
          </Route>
          <PrivateRoute exact path="/">
            <Redirect to='/adverts'  />
          </PrivateRoute>
         
          <Redirect to="/404">
           
          </Redirect>
        </Switch>
       
    </div>
  );
}

export default App;
