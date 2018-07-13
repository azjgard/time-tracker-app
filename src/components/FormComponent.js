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
    this.setState({shouldSubmit: true});
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
      this.props.dispatch(
        this.props.action({
          formData: this.state.formData,
          formName: this.props.name,
        }),
      );
    }
  }

  renderFields() {
    return this.props.fields.map(field => (
      <div key={field.name}>
        <label>{field.name}</label> <br />
        <input
          {...field}
          onChange={e => this.handleChange(field.name, e.target.value)}
        />
      </div>
    ));
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
