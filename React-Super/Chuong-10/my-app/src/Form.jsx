import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      textArea: "",
      checkedActive: true,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleInputText = (event) => {
    const { value } = event.target;
    this.setState({
      name: value,
    });
  };

  handleTextAreaChange = (event) => {
    const { value } = event.target;
    this.setState({
      textArea: value,
    });
  };

  handleCheckedChange = (event) => {
    const { checked, value } = event.target;
    console.log(value);
    this.setState({
      checkedActive: checked,
    });
  };

  render() {
    return (
      <div className="div">
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.name}
            name="name"
            onChange={this.handleInputText}
          />
          <textarea
            name="textArea"
            value={this.state.textArea}
            onChange={this.handleTextAreaChange}
          />
          <input
            type="checkbox"
            name="checkedActive"
            value="123"
            checked={this.state.checkedActive}
            onChange={this.handleCheckedChange}
          />
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
