import React, {Component} from 'react';
import Form from './containers/FormContainer';

import {login, logout} from './actions/authActionCreators.js'; // Testing
import {getToken} from './lib/token';
import {connect} from 'react-redux'; // Testing

// Testing
const IndicatorComponent = ({isLoggedIn}) => (
  <div>
    <span>
      {' '}
      <b>Logged in:</b> {isLoggedIn ? 'true' : 'false'}
    </span>
  </div>
);
const mstp = state => ({
  isLoggedIn: state.user.isLoggedIn,
});
const Indicator = connect(mstp)(IndicatorComponent);
// /Testing

const LogoutComponent = ({logout}) => (
  <div>
    <button onClick={logout}>Logout</button>
  </div>
);
const mstp2 = state => ({});
const mdtp = dispatch => ({
  logout: () => dispatch(logout()),
});
const Logout = connect(mstp2, mdtp)(LogoutComponent);

const LoginForm = () => (
  <Form
    className="LoginForm"
    fields={[
      {
        name: 'Username/Email',
        type: 'text',
      },
      {
        name: 'Password',
        type: 'password',
      },
    ]}
    action={login}
  />
);

class AppComponent extends Component {
  async componentDidMount() {
    const token = await getToken();
    if (token) this.props.loginUser(token);
  }

  render() {
    return (
      <div className="App">
        <aside>
          <h1>Time Tracker</h1>
          <nav>
            <ul>
              <li>Home</li>
              <li>Login</li>
              <li>Logout</li>
            </ul>
          </nav>
        </aside>

        <LoginForm />
        <Indicator />
        <Logout />
      </div>
    );
  }
}

const App = connect(
  () => ({}),
  dispatch => ({
    loginUser: token => dispatch({type: 'LOGIN_SUCCESS', token}),
  }),
)(AppComponent);

export default App;
