import React from 'react';
import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';
import { ConnectedRouter as Router } from 'connected-react-router';

import App from './App';

export default function Root({ store, history }) {
  return (
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );
}
