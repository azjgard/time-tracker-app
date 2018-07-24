import React from "react";
import TimeLogger from "../TimeLogger/TimeLoggerContainer";
import "./Dashboard.css";

class Dashboard extends React.Component {
  renderDateString(time) {
    return `${time.getMonth()}/${time.getDay()}/${time.getFullYear()}`;
  }

  renderLogs() {
    let hourlyTotal = 0.0;

    const logDisplay = this.props.logs ? (
      this.props.logs.map((logObject, i) => {
        const startTime = new Date(logObject.startTime);
        const endTime = new Date(logObject.endTime);

        const style =
          i % 2 === 0
            ? { backgroundColor: "#f5f5f5" }
            : { backgroundColor: "#fff" };

        let hours = parseFloat((endTime - startTime) / 1000 / 60 / 60);
        if (hours < 0.01) {
          hours = 0.01;
        }
        hourlyTotal += hours;

        return (
          <div key={i} style={style}>
            <div>
              <b>Date: </b> {this.renderDateString(startTime)}
            </div>
            <div>
              <b>Duration: </b> {hours.toFixed(2)} hours
            </div>
          </div>
        );
      })
    ) : (
      <h2>No logs found</h2>
    );

    return (
      <div>
        <div className="Timelogs">{logDisplay}</div>
        <br />
        <span>
          <b>Total Time Logged:</b> {hourlyTotal.toFixed(2)} hours{" "}
          <small style={{ color: "#aaa" }}>
            (as of {`${new Date().getHours()}:${new Date().getMinutes()}`})
          </small>
        </span>
      </div>
    );
  }

  async componentDidMount() {
    await this.props.getLogs();
  }

  render() {
    return (
      <div>
        <TimeLogger />
        {this.renderLogs()}
      </div>
    );
  }
}

export default Dashboard;
