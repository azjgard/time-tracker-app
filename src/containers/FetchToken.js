import React from 'react';
import {connect} from 'react-redux';

import {getToken} from '../actions/api';

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
    token: state.auth.token,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    storeToken: () => dispatch(getToken('jords', 'thisismypassword')),
  };
};

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default Login;
