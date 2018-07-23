import TimeComponent from './TimeComponent';
import {connect} from 'react-redux';

const mapStateToProps = state => ({
  time: state.timelog.clockInTime,
});

const Time = connect(mapStateToProps)(TimeComponent);

export default Time;
