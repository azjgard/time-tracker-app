import React, {Component} from 'react';
import Form from '../Form/FormContainer';
import {login} from '../../actions/authActions'; // Testing
import {getToken} from '../../lib/token';
import './App.css';

import {Fragment} from 'redux-little-router';

import Sidebar from '../Sidebar/SidebarContainer';

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
        <Sidebar />
        <main>
          <Fragment forRoute="/">
            <React.Fragment>
              <Fragment forRoute="/">
                <React.Fragment>
                  <h1>
                    Time Tracker tracker.. is the tracker.. for you and me
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <img src="https://picsum.photos/400/200" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </React.Fragment>
              </Fragment>
              <Fragment forRoute="/login">
                <LoginForm />
              </Fragment>
              <Fragment forRoute="/dashboard">
                <h1>dashboard</h1>
              </Fragment>
            </React.Fragment>
          </Fragment>
        </main>
      </div>
    );
  }
}

export default AppComponent;
