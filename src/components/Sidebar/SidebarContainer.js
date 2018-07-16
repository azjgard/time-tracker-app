import {connect} from 'react-redux';
import SidebarComponent from './SidebarComponent';

import {logout} from '../../actions/authActions';

const stateToProps = state => ({
  isLoggedIn: state.user.isLoggedIn,
  links: state.nav,
  currentPath: state.router.pathname,
});

const dispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

const Sidebar = connect(stateToProps, dispatchToProps)(SidebarComponent);

export default Sidebar;
