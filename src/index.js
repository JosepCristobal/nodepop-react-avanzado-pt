import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './Root';
import './index.css';
import configureStore from './store';
import App from './App';

import { createBrowserHistory } from 'history';
import storage from './utils/storage';
import { configureClient } from './api/client';

const accessToken = storage.get('auth');
configureClient({ accessToken });

const history = createBrowserHistory();

const store = configureStore({
  preloadedState: { auth: !!accessToken },
  history,
});

const render = ()=> {
  ReactDOM.render(
    // <Router>
      // <App isInitiallyLogged={!!accessToken}/>
    // </Router>,
    <Root store={store} history={history} />,
    document.getElementById('root')
  );
};

render();
