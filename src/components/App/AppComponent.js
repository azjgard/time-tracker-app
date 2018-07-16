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
                <h1>homepage</h1>
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
