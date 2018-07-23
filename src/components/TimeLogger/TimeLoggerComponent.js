import React from 'react';
import TimeComponent from './TimeContainer';

class TimeLogger extends React.Component {
  render() {
    return (
      <div>
        <h1>hey</h1>
        <TimeComponent />
        <button onClick={this.props.clockIn}>Clock In</button>
        <button onClick={this.props.clockOut}>Clock Out</button>
      </div>
    );
  }
}

export default TimeLogger;
