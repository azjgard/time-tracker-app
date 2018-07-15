import React, {Component} from 'react';
import Form from '../Form/FormContainer';

import {login} from '../../actions/authActions'; // Testing
import {getToken} from '../../lib/token';

import './App.css';

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
              <button onClick={this.props.logout}>Logout?</button>
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
        <main>
          <LoginForm />
        </main>
      </div>
    );
  }
}

export default AppComponent;
