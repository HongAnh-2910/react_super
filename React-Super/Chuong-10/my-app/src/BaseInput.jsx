import React from "react";
import { bool, func, string } from "prop-types";
class BaseInput extends React.Component {
  render() {
    const { type: typeInput, ...rest } = this.props;
    return <input {...rest} type={typeInput} />;
  }
}

BaseInput.propTypes = {
  type: string.isRequired,
  className: string.isRequired,
  autoFocus: bool,
  onChange: func,
};

export default BaseInput;
