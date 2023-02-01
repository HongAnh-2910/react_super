import React, { Component, createRef } from "react";

class Uncontrolled extends Component {
  constructor(props) {
    super(props);

    this.input = createRef();
    this.inputFile = createRef();
    this.state = {
      inputFile: null,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.inputFile.name, this.input.current.value);
    const formData = new FormData();
    formData.append("my-file", this.state.inputFile, this.state.inputFile.name);
  };

  handleFileChange = (event) => {
    this.setState({
      inputFile: event.target.files[0],
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          ref={this.input}
          className="inputText"
          defaultValue="Be"
        />
        <input
          type="file"
          ref={this.inputFile}
          onChange={this.handleFileChange}
        />
        <button type="submit">Tìm kiếm</button>
      </form>
    );
  }
}

export default Uncontrolled;
