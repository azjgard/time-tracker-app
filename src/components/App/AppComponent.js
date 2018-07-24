import React, { Component } from "react";
import Form from "../Form/FormContainer";
import { login } from "../../actions/authActions"; // Testing
import { getToken } from "../../lib/token";
import { Fragment } from "redux-little-router";

import { getCookie } from "../../lib/cookie";

import Sidebar from "../Sidebar/SidebarContainer";
import TimeLogger from "../TimeLogger/TimeLoggerContainer";

import "./App.css";

const LoginForm = () => (
  <Form
    className="LoginForm"
    fields={[
      {
        name: "Username/Email",
        type: "text"
      },
      {
        name: "Password",
        type: "password"
      }
    ]}
    action={login}
  />
);

class AppComponent extends Component {
  async attemptToLogin() {
    const token = await getToken();
    if (token) this.props.loginUser(token);
  }

  async attemptToClockIn() {
    const clockInTimeString = await getCookie("clockInTime");
    if (clockInTimeString) {
      this.props.clockIn(new Date(clockInTimeString));
    }
  }

  async componentDidMount() {
    await this.attemptToLogin();
    await this.attemptToClockIn();
  }

  render() {
    return (
      <div className="App">
        <Sidebar />
        <main>
          <Fragment forRoute="/">
            <React.Fragment>
              <Fragment forRoute="/">
                <h1>Homepage</h1>
              </Fragment>
              <Fragment forRoute="/login">
                <LoginForm />
              </Fragment>
              <Fragment forRoute="/dashboard">
                <React.Fragment>
                  <h1>dashboard</h1>
                  <TimeLogger />
                </React.Fragment>
              </Fragment>
            </React.Fragment>
          </Fragment>
        </main>
      </div>
    );
  }
}

export default AppComponent;
