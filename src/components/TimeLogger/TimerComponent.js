import React from "react";

// We increment the clocked-in timer using local state
// so that we don't trigger ALL of our reducers by dispatching
// some kind of INCREMENT_TIMER action every second.
//
// Although that isn't too big of a deal while the app is small, with a ton
// of reducers, this could implement a ton of latency.
class TimeComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { time: null };
    this.incrementTimer = this.incrementTimer.bind(this);
  }

  incrementTimer() {
    if (this.props.time) {
      const timeDifference = new Date().getTime() - this.props.time.getTime();

      const totalSeconds = timeDifference / 1000;
      const totalMinutes = Math.floor(totalSeconds / 60);

      const minutes = Math.floor(totalMinutes % 60);
      const seconds = Math.floor(totalSeconds % 60);
      const hours = totalMinutes ? Math.floor(totalMinutes / 60) : "0";

      const timeString = `${hours}:${minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;

      this.setState({ time: timeString });
    } else {
      this.setState({ time: null });
    }
  }

  componentDidUpdate() {
    setTimeout(this.incrementTimer, this.state.time ? 1000 : 0);
  }

  render() {
    return <div>{this.state.time ? this.state.time : "0:00:00"}</div>;
  }
}

export default TimeComponent;
