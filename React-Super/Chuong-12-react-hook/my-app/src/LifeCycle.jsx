import React, { Component } from "react";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "1",
    };
  }
  componentDidMount() {
    console.log("did mount");
  }

  componentDidUpdate() {
    console.log("did update");
  }

  handleState = () => {
    this.setState({
      name: 2,
    });
  };
  render() {
    return <button onClick={this.handleState}>LifeCycle</button>;
  }
}
