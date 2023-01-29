import React, { Component } from "react";
import PropTypes from "prop-types";
export default class BoilingVerdict extends Component {
  render() {
    const { celsius } = this.props;
    return (
      <div>
        {celsius >= 100 ? "The water would boid" : "The water would not boid"}
      </div>
    );
  }
}

BoilingVerdict.propTypes = {
  celsius: PropTypes.number.isRequired,
};
