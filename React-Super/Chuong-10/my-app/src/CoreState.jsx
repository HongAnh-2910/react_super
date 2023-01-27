import React from "react";

function fetApi() {
  return new Promise((reslove, reject) => {
    setTimeout(() => {
      reslove(["A", "B", "C", "D"]);
    }, 1000);
  });
}

class CoreState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      list: [],
    };
  }
  //   setState trong class component có tính năng tự merge state k cần phải clone giá trị state cũ
  componentDidMount() {
    console.log("did mount");
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
    this.setState((prev) => ({
      count: prev.count + 1,
    }));

    fetApi().then((res) => {
      this.setState({
        list: res,
      });
    });
  }

  render() {
    console.log(this.state);
    console.log("render");
    return <h3>Count:{this.state.count}</h3>;
  }
}

export default CoreState;
