import React from 'react';
import Project from './ProjectComponent';

class ProjectListComponent extends React.Component {
  renderProjects() {
    return this.props.projects.map((p, index) => (
      <Project name={p.name} tasks={p.tasks} key={index} />
    ));
  }

  render() {
    return <div>{this.renderProjects()}</div>;
  }
}

export default ProjectListComponent;
