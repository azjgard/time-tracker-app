import React from 'react';

class FormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shouldSubmit: false,
      formData: {},
    };

    this.props.fields.map(field => {
      this.state.formData[field.name] = '';
    });

    this.submit = this.submit.bind(this);
  }

  submit(e) {
    e.preventDefault();
    this.setState({...this.state, shouldSubmit: true});
  }

  resetForm() {
    const formData = {};
    for (let key in this.state.formData) formData[key] = '';
    this.setState({shouldSubmit: false, formData});
  }

  handleChange(stateProp, newValue) {
    this.setState({
      ...this.state,
      formData: {
        ...this.state.formData,
        [stateProp]: newValue,
      },
    });
  }

  componentDidUpdate() {
    if (this.state.shouldSubmit) {
      this.props.dispatch(this.props.action(this.state.formData));
      this.resetForm();
    }
  }

  renderFields() {
    return this.props.fields.map((field, index) => {
      return (
        <div key={field.name}>
          <label>{field.name}</label> <br />
          <input
            {...field}
            value={this.state.formData[field.name]}
            onChange={e => this.handleChange(field.name, e.target.value)}
          />
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <form>
          {this.renderFields()}
          <button onClick={this.submit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default FormComponent;
