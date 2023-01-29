import React, { Component } from "react";

export default class RowProduct extends Component {
  render() {
    const { name, price } = this.props.productItem;
    return (
      <tr>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    );
  }
}
