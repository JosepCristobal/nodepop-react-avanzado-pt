import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsLogged } from '../../../store/selectors'



const PrivateRoute = ({ isLogged, ...props}) => {

  return isLogged ? (
    <Route {...props} />
  ) : (
    <Route>
      {({ location }) => (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </Route>
  );
};
const mapStateToProps = state => ({isLogged: getIsLogged(state) });
export default connect(mapStateToProps)(PrivateRoute);