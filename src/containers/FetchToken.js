import React from 'react';
import {connect} from 'react-redux';

import {login} from '../actions/api';

const LoginComponent = ({token, storeToken}) => (
  <div>
    <span>
      <b>Backend Token:</b> {token}
    </span>
    <button onClick={storeToken}>Get Token</button>
  </div>
);

const mapStateToProps = state => {
  return {
    token: state.user.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    storeToken: () => dispatch(login('jord', 'thisismypassword')),
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default Login;
