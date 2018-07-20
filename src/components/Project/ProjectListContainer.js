import ProjectListComponent from './ProjectListComponent';
import {connect} from 'react-redux';

const mapPropsToState = state => ({
  projects: state.projects,
});

const ProjectList = connect(mapPropsToState)(ProjectListComponent);

export default ProjectList;
