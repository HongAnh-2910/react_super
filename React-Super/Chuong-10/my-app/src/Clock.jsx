import React from "react";
import BaseInput from "./BaseInput";
import Layout from "./Layout";

const arrayList = ["BMW", "TOYOTA", "HONDA"];
let callApi = null;
const fetchApi = () => {
  return new Promise((resolve, reject) => {
    callApi = setTimeout(() => {
      resolve(arrayList);
    }, 1000);
  });
};

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time2: {
        created: new Date().toTimeString(),
      },
      time: {
        created: new Date().toTimeString(),
      },
      seconds: {
        created: new Date().getSeconds(),
      },
      list: [],
      toogleDark: false,
    };
  }
  // componentDidMount thuong dung de get Dom va call api vi chay sau khi render Ui len trinh duyet
  componentDidMount() {
    console.log("did mount");
    // let idElement = document.getElementById("clooker");
    fetchApi()
      .then((res) => {
        this.setState((prev) => ({
          ...prev,
          list: res,
        }));
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
  //   chay moi khi cap nhat lai state hoac prop , sau khi render vao dom
  componentDidUpdate() {
    if (this.state.toogleDark) {
      let getDomValue = document.getElementsByClassName("inputChnage");
      console.log(getDomValue);
    }
    console.log("did update");
  }

  componentWillUnmount() {
    console.log("willunmount");
    clearTimeout(callApi);
  }

  handleClickTime = () => {
    this.setState({
      ...this.state,
      time: {
        created: new Date().toTimeString(),
      },
      seconds: { ...this.state.seconds, created: new Date().getSeconds() },
    });
  };
  // curring fuction
  handleToggle = () => () => {
    console.log("123");
    // this.setState((prev) => ({
    //   ...prev,
    //   toogleDark: !prev.toogleDark,
    // }));
  };

  handleCURD = (event, value) => {
    console.log(event, value);
  };
  render() {
    console.log("render");
    return (
      <div id="clooker">
        <h1>HelloWorld</h1>
        <div className="time">{this.state.time.created}</div>
        <div className="time">{this.state.seconds.created}</div>
        {this.state.toogleDark && (
          <input
            type="text"
            value={this.state.toogleDark}
            className="inputChnage"
          />
        )}
        <Layout>
          <h1>ádas</h1>
          <BaseInput
            type="password"
            className="text-input"
            autoFocus
            onChange={() => {}}
          />
        </Layout>
        <button onClick={this.handleClickTime} className="clickTime">
          Click me
        </button>
        <button onClick={this.handleToggle()} className="clickTime">
          Click Toggle
        </button>
        <button
          onClick={(event) => this.handleCURD(event, "add")}
          className="clickTime"
        >
          Add
        </button>
        {/* <button onClick={this.handleCURD("edit")} className="clickTime">
          Edit
        </button>
        <button onClick={this.handleCURD("delete")} className="clickTime">
          Delete
        </button> */}
      </div>
    );
  }
}

export default Clock;
