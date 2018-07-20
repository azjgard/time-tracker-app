import {LOGIN_SUCCESS, LOGOUT} from '../actions/CONSTANTS';

const sharedLinks = [];
const loggedOutLinks = [
  {
    href: '/',
    text: 'Home',
  },
  {
    href: '/login',
    text: 'Login',
  },
];
const loggedInLinks = [
  {
    href: '/dashboard',
    text: 'Dashboard',
  },
  {
    href: '/logout',
    text: 'Logout',
  },
];

const navReducer = (navLinks = [...sharedLinks, ...loggedOutLinks], action) => {
  switch (action.type) {
    case LOGOUT:
      return [...sharedLinks, ...loggedOutLinks];
    case LOGIN_SUCCESS:
      return [...sharedLinks, ...loggedInLinks];
    default:
      return navLinks;
  }
};

export default navReducer;
