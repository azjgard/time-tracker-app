import {connect} from 'react-redux';
import {login} from '../../actions/authActions';
import {clockIn} from '../../actions/timelogActions';

import AppComponent from './AppComponent';

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  loginUser: token => dispatch(login(null, token)),
  clockIn: date => dispatch(clockIn(date)),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default AppContainer;
