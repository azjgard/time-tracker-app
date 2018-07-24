import React from "react";
import TimeLogger from "../TimeLogger/TimeLoggerContainer";

class Dashboard extends React.Component {
  renderLogs() {
    return <span>logs</span>;
  }

  componentDidMount() {
    console.log("---------");
    console.log("---------");
    console.log("---------");
    console.log("---------");
    console.log("---------");
    console.log("dashboard mounted");
    console.log(this.props.logs);
    console.log("---------");
    console.log("---------");
    console.log("---------");
    console.log("---------");
    console.log("---------");
  }

  render() {
    return (
      <div>
        <h1>dashboard</h1>
        <TimeLogger />
        {this.renderLogs()}
      </div>
    );
  }
}

export default Dashboard;
