import FormComponent from '../components/FormComponent';
import {connect} from 'react-redux';

const mapPropsToState = state => ({});
const mapDispatchToState = dispatch => ({dispatch});

const Form = connect(mapPropsToState, mapDispatchToState)(FormComponent);

export default Form;
