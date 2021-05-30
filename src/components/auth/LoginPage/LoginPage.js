import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
import {loginAction , resetError} from '../../../store/actions'
import { getUi } from '../../../store/selectors'
import './LoginPage.css';

function LoginPage() {
  const firstTime = React.useRef(true);
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(getUi);

  React.useEffect(() => {
    if (firstTime) {
      // Do things only the first time
      firstTime.current = false;
    }
  });

  const handleSubmit = async credentials => {
    dispatch(loginAction(credentials))
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to NodePop</h1>
      <LoginForm isLoading={isLoading} onSubmit={handleSubmit} />
      {error && (
        <div onClick={() => dispatch(resetError())} className="loginPage-error">
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;