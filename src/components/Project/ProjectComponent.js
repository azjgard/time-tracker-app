import React from 'react';

class ProjectComponent extends React.Component {
  renderTasks() {
    return this.props.tasks.map((t, i) => <li key={i}>{t}</li>);
  }

  render() {
    return (
      <div className="Project">
        <h1>{this.props.name}</h1>
        <ul>{this.renderTasks()}</ul>
      </div>
    );
  }
}

export default ProjectComponent;
