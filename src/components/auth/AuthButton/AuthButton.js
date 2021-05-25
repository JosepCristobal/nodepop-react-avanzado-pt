import T from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../../shared';
import { logout } from '../../../api/auth';
import { getIsLogged } from '../../../store/selectors';

const AuthButton = ({ className, isLogged, onLogout }) => {
  const handleLogoutClick = () => {
    window.confirm('Esta seguro de salir de la aplicación?')? logout().then(onLogout):console.log('No borrar');
  };

  const props = isLogged
    ? { onClick: handleLogoutClick, children: 'Log out' }
    : {
        as: Link,
        to: '/login',
        children: 'Log in',
      };

  return <Button className={className} {...props} />;
};

AuthButton.propTypes = {
  className: T.string,
  isLogged: T.bool,
  onLogout: T.func.isRequired,
};

AuthButton.defaultProps = {
  isLogged: false,
};

const mapStateToProps = state => ({isLogged: getIsLogged(state)})

export default connect(mapStateToProps)(AuthButton);
