import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      textArea: "",
      checkedActive: true,
      listCouse: [
        { id: 1, name: "React" },
        { id: 2, name: "Html" },
        { id: 3, name: "Laravel" },
      ],
      checkedId: [2],
      radioId: 1,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = (event, id = "") => {
    console.log(event);
    const { name, value: valueChange, type } = event.target;
    let value = type === "radio" ? id : valueChange;
    this.setState({
      [name]: value,
    });
  };

  handleCheckBoxChange = (id) => {
    let check = this.state.checkedId.includes(id);
    if (check) {
      let stateNew = this.state.checkedId.filter((x) => x !== id);
      this.setState({
        checkedId: [...stateNew],
      });
    } else {
      this.setState((prev) => ({
        checkedId: [...prev.checkedId, id],
      }));
    }
  };
  handleRadioChange = (id) => {
    this.setState({
      radioId: id,
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
            onChange={this.handleChange}
          />
          <textarea
            name="textArea"
            value={this.state.textArea}
            onChange={this.handleChange}
          />
          <ul className="list">
            {this.state.listCouse.map((item) => (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={this.state.checkedId.includes(item.id)}
                  onChange={() => this.handleCheckBoxChange(item.id)}
                />
                <span style={{ display: "inline-block", width: "50px" }}>
                  {item.name}
                </span>
              </li>
            ))}
          </ul>

          <ul className="list">
            {this.state.listCouse.map((item) => (
              <li key={item.id}>
                <input
                  type="radio"
                  name="radioId"
                  checked={this.state.radioId === item.id}
                  onChange={(event) => this.handleChange(event, item.id)}
                />
                <span style={{ display: "inline-block", width: "50px" }}>
                  {item.name}
                </span>
              </li>
            ))}
          </ul>
          <button>submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
