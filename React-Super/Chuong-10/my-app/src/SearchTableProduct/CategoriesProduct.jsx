import React, { Component } from "react";

export default class CategoriesProduct extends Component {
  render() {
    const { category } = this.props;
    return (
      <tr>
        <th colSpan={2}>{category}s</th>
      </tr>
    );
  }
}
