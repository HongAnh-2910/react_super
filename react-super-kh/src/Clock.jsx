import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        created: new Date().toTimeString(),
      },
      seconds: {
        created: new Date().getSeconds(),
      },
    };
    this.setTime = this.setTime.bind(this);
  }
  setTime() {
    const newState = {
      ...this.state,
      time: {
        created: new Date().toTimeString(),
      },
      seconds: {
        ...this.state.seconds,
        created: new Date().getSeconds(),
      },
    };
    this.setState(newState);
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.time.created}.</h2>
        <h2>It seconds {this.state.seconds.created}.</h2>
        <button onClick={this.setTime}>Click me</button>
        {/* <h3>Seconds: {this.state.seconds.created}</h3> */}
      </div>
    );
  }
}
