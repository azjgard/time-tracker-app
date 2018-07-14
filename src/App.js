import React, {Component} from 'react';
import Form from './containers/FormContainer';

import {login, logout} from './actions/authActionCreators.js'; // Testing
import {getToken} from './lib/token';
import {connect} from 'react-redux'; // Testing

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
          <small>
            logged in: <b>{this.props.isLoggedIn ? 'true' : 'false'}</b>
            <br />
            {this.props.isLoggedIn ? (
              <a href="#" onClick={this.props.logout}>
                Logout?
              </a>
            ) : (
              ''
            )}
          </small>
          <nav>
            <ul>
              <li>Home</li>
              <li>Login</li>
              <li>Logout</li>
            </ul>
          </nav>
        </aside>

        <LoginForm />
      </div>
    );
  }
}

const App = connect(
  state => ({
    isLoggedIn: state.user.isLoggedIn,
  }),
  dispatch => ({
    loginUser: token => dispatch({type: 'LOGIN_SUCCESS', token}),
    logout: () => dispatch(logout()),
  }),
)(AppComponent);

export default App;
