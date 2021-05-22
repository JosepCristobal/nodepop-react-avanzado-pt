import React from 'react';
import './App.css';
import T from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { LoginPage, PrivateRoute } from './components/auth';
import { AdvertsPage, NewAdvertPage, AdvertDetailPage } from './components/adverts';
import { AuthContextProvider } from './components/auth/context';
import  { Redirect } from 'react-router-dom'

function App({ isInitiallyLogged }) {
  const [isLogged, setIsLogged] = React.useState(isInitiallyLogged);
  const ref = React.useRef(null);

  const handleLogin = () => {
    setIsLogged(true);
  };

  const handleLogout = () => setIsLogged(false);

  const authValue = {
    isLogged,
    onLogout: handleLogout,
    onLogin: handleLogin,
  };

  return (
    <div className="App">
       <AuthContextProvider value={authValue}>
       <Switch>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/adverts/:advertId">
            {routeProps => <AdvertDetailPage ref={ref} {...routeProps} />}
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
       </AuthContextProvider>
    </div>
  );
}

App.propTypes = {
  isInitiallyLogged: T.bool.isRequired,
};

export default App;
