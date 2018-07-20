import React from 'react';
import './Project.css';

class ProjectComponent extends React.Component {
  renderSortedTasks() {
    const statuses = {
      todo: [],
      doing: [],
      review: [],
    };

    this.props.tasks.map(t => statuses[t.status].push(t));

    return (
      <div className="KanbanColumns">
        <div>
          <h3>Todo</h3>
          {this.renderTasks(statuses.todo)}
        </div>
        <div>
          <h3>Doing</h3>
          {this.renderTasks(statuses.doing)}
        </div>
        <div>
          <h3>Review</h3>
          {this.renderTasks(statuses.review)}
        </div>
      </div>
    );
  }

  renderTasks(tasks) {
    return (
      <ul>{tasks.map((task, index) => <li key={index}>{task.name}</li>)}</ul>
    );
  }

  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        {this.renderSortedTasks()}
      </div>
    );
  }
}

export default ProjectComponent;
