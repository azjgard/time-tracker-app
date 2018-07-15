import React from 'react';
import {Link} from 'redux-little-router';

class Sidebar extends React.Component {
  renderLinks() {
    return this.props.links.map((link, index) => (
      <li key={index}>
        <Link href={link.href}>{link.text}</Link>
      </li>
    ));
  }

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
          <ul>{this.renderLinks()}</ul>
        </nav>
      </aside>
    );
  }
}

export default Sidebar;
