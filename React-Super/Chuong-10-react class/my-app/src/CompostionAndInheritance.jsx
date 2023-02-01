import React, { Component } from "react";

// class Button extends Component {
//   handleClick = (event) => {
//     console.log(event.target);
//   };
//   render() {
//     return (
//       <button className="btn" onClick={this.handleClick}>
//         Click Me
//       </button>
//     );
//   }
// }
// // inheritance
// class ButtonYellow extends Button {
//   render() {
//     return (
//       <button className="btn-yellow" onClick={this.handleClick}>
//         Click Yellow
//       </button>
//     );
//   }
// }

// compostion
class Button extends Component {
  constructor(props) {
    super(props);

    this.element = React.createRef();
  }
  handleClick = (event) => {
    console.log(this.element.current);
  };
  render() {
    console.log(this.props);
    const { className = "", children } = this.props;
    return (
      <button
        className={`btn ${className} `}
        ref={this.element}
        onClick={this.handleClick}
      >
        {children} Click Me
      </button>
    );
  }
}

class Layout extends Component {
  render() {
    const { left, right } = this.props;
    return (
      <div className="container">
        <div className="sider-bar-left">{left}</div>
        <div className="sider-bar-right">{right}</div>
      </div>
    );
  }
}

export default class CompostionAndInheritance extends Component {
  render() {
    return (
      <div>
        <h1>CompostionAndInheritance</h1>
        <Layout
          left={<Button />}
          right={
            <Button className="yellow">
              <p>Yellow</p>
            </Button>
          }
        />
      </div>
    );
  }
}
