import React from 'react';
import Timer from './TimerComponent';

const ClockIn = ({clockIn}) => <button onClick={clockIn}>Clock In</button>;
const ClockOut = ({clockOut}) => <button onClick={clockOut}>Clock Out</button>;

const ClockInOutButtons = ({clockIn, clockOut, isClockedIn}) => [
  isClockedIn ? <ClockOut key={0} clockOut={clockOut} /> : '',
  !isClockedIn ? <ClockIn key={1} clockIn={clockIn} /> : '',
];

class TimeLogger extends React.Component {
  render() {
    return (
      <div>
        <Timer time={this.props.clockInTime} />
        <ClockInOutButtons
          clockIn={this.props.clockIn}
          clockOut={this.props.clockOut}
          isClockedIn={this.props.clockInTime}
        />
      </div>
    );
  }
}

export default TimeLogger;
