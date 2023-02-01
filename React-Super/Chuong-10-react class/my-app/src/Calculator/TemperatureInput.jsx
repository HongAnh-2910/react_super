import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TemperatureInput extends Component {
  handleChange = (event) => {
    const { getValueChange } = this.props;
    getValueChange(event.target.value);
  };
  render() {
    const { title, temperature } = this.props;
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {title}:</legend>
          <input type="text" value={temperature} onChange={this.handleChange} />
        </fieldset>
      </div>
    );
  }
}
TemperatureInput.propTypes = {
  title: PropTypes.string.isRequired,
  temperature: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  getValueChange: PropTypes.func,
};
