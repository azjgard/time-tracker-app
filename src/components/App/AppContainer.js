import {connect} from 'react-redux';
import {login, logout} from '../../actions/authActions';

import AppComponent from './AppComponent';

const mapStateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  loginUser: token => dispatch(login(null, token)),
  logout: () => dispatch(logout()),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default AppContainer;
