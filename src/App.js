import React, {Component} from 'react';
import Counter from './containers/Counter';
import Form from './containers/FormContainer';

import {loginAttempt} from './actions/auth.js';

const LoginForm = () => (
  <Form
    fields={[
      {
        name: 'Username/Email',
        type: 'text',
      },
      {
        name: 'Password',
        type: 'text',
      },
    ]}
    action={loginAttempt}
  />
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <LoginForm />
      </div>
    );
  }
}

export default App;
