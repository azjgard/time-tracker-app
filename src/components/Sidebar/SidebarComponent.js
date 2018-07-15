import React from 'react';
import {Link} from 'redux-little-router';

class Sidebar extends React.Component {
  render() {
    return (
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
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Sidebar;
