import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import LoginForm from './LoginForm';
//import { login } from '../../../api/auth';
//import {authLoginRequest, authLoginSucces, authLoginFailure , resetError} from '../../../store/actions'
import {loginAction , resetError} from '../../../store/actions'
import { getUi } from '../../../store/selectors'
import './LoginPage.css';
// import { useLocation } from 'react-router';

function LoginPage() {
  // const [error, setError] = React.useState(null);
  // const [isLoading, setIsLoading] = React.useState(false);
  const isLogged = React.useRef(false);
  const firstTime = React.useRef(true);
  const dispatch = useDispatch();
  const {isLoading, error} = useSelector(getUi);

  //const onLogin = () => dispatch(authLoginSucces());

  //const resetError = React.useCallback(() => setError(), []);
  //const history = useHistory();
  // const location = useLocation();

  // React.useEffect(() => {
  //    // onLogin();
      
  //     // const from = location.state ? location.state.from : {pathname: '/'}

      
  // });

  React.useEffect(() => {
    if (firstTime) {
      // Do things only the first time
      firstTime.current = false;
    }
  });

  const handleSubmit = async credentials => {
    dispatch(loginAction(credentials))
    // // login(credentials).then(() => onLogin());
    // dispatch(authLoginRequest());

    // try {
    //   await login(credentials);
    //   //isLogged.current = true;
    //   dispatch(authLoginSucces());
    //   const { from } = location.state || { from: { pathname: '/' } };
    //   history.replace(from);
    // } catch (error) {
    //   dispatch(authLoginFailure(error));
    // } 
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

// const mapDispatchToProps = dispatch => ({
//   onLogin: () => dispatch(authLogin())
// });

// export default connect(null,mapDispatchToProps)(LoginPage);
export default LoginPage;