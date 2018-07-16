import React from 'react';
import {Link} from 'redux-little-router';

import './Sidebar.css';

class Sidebar extends React.Component {
  renderLinks() {
    return this.props.links.map((link, index) => (
      <li key={index}>
        <Link
          className={link.href === this.props.currentPath ? 'active' : ''}
          href={link.href}>
          {link.text}
        </Link>
      </li>
    ));
  }

  render() {
    return (
      <aside>
        <h1>Time Tracker</h1>
        <nav>
          <ul>{this.renderLinks()}</ul>
        </nav>
      </aside>
    );
  }
}

export default Sidebar;
