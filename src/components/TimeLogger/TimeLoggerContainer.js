import {connect} from 'react-redux';
import TimeLoggerComponent from './TimeLoggerComponent';

import {clockIn, clockOut} from '../../actions/timelogActions';

const mapStateToProps = state => ({
  clockInTime: state.timelog.clockInTime,
});

const mapDispatchToProps = dispatch => ({
  clockIn: () => dispatch(clockIn(new Date())),
  clockOut: () => dispatch(clockOut()),
});

const TimeLogger = connect(mapStateToProps, mapDispatchToProps)(
  TimeLoggerComponent,
);

export default TimeLogger;
