import {connect} from 'react-redux';
import {login, logout} from '../../actions/authActions';

import AppComponent from './AppComponent';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loginUser: token => dispatch(login(null, token)),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default AppContainer;
