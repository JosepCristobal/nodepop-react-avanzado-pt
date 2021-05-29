import React from 'react';
import './App.css';
//import T from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { LoginPage, PrivateRoute } from './components/auth';
import { AdvertsPage, NewAdvertPage, AdvertDetailPage } from './components/adverts';
import  { Redirect } from 'react-router-dom'

// function App({ isInitiallyLogged }) {
  function App() {
  //const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  //const ref = React.useRef(null);

  return (
    <div className="App">
       
       <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/adverts/:advertId">
            {routeProps => <AdvertDetailPage {...routeProps} />}
            {/* {routeProps => <AdvertDetailPage ref={ref} {...routeProps} />} */}
          </PrivateRoute>
          <PrivateRoute path="/advert">
            <NewAdvertPage />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <Redirect to='/adverts'  />
          </PrivateRoute>
          {/* <PrivateRoute exact path="/adverts">
            <AdvertsPage />
          </PrivateRoute> */}
          <Route exact path="/adverts">
            <AdvertsPage />
          </Route>
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
