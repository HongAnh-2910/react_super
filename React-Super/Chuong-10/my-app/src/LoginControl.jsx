import React from "react";

class LogoutButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return <button onClick={onClick}>Logout</button>;
  }
}

class LoginInButton extends React.Component {
  render() {
    const { onClick } = this.props;
    return <button onClick={onClick}>Login</button>;
  }
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }

  handleClickLogout = () => {
    this.setState({
      isLogin: false,
    });
  };
  handleClickLoggin = () => {
    this.setState({
      isLogin: true,
    });
  };

  render() {
    const { isLogin } = this.state;
    const { hidden } = this.props;
    if (hidden) return null;
    return (
      <div className="login-control">
        {isLogin && <LogoutButton onClick={this.handleClickLogout} />}
        {!isLogin && <LoginInButton onClick={this.handleClickLoggin} />}
      </div>
    );
  }
}
export default LoginControl;
