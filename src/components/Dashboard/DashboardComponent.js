import React from "react";
import TimeLogger from "../TimeLogger/TimeLoggerContainer";

class Dashboard extends React.Component {
  renderLogs() {
    if (!this.props.logs) {
      return <h2>No logs found.</h2>;
    } else {
      return this.props.logs.map((logObject, i) => {
        if (logObject) {
          return (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-around"
              }}
            >
              <span>
                <b>{i}</b>
              </span>
              <span>
                <b>Clocked In: </b> {logObject.startTime}
              </span>
              <span>
                <b>Clocked Out: </b> {logObject.endTime}{" "}
              </span>
            </div>
          );
        } else {
          return "";
        }
      });
    }
  }

  async componentDidMount() {
    await this.props.getLogs();
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
