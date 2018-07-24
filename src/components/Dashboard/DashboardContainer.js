import DashboardComponent from "./DashboardComponent";
import { connect } from "react-redux";
import { getLogs } from "../../actions/timelogActions";

const mapStateToProps = state => ({
  logs: state.timelog.logs
});

const mapDispatchToProps = dispatch => ({
  getLogs: () => dispatch(getLogs())
});

const Dashboard = connect(mapStateToProps)(DashboardComponent);

export default Dashboard;
