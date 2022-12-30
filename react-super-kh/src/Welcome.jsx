import React from "react";

// function Welcome(props) {
//   return <h1>Hello day la {props.name}</h1>;
// }

class Welcome extends React.Component {
  render() {
    return <h1>Hello day la {this.props.name}</h1>;
  }
}

export default Welcome;
