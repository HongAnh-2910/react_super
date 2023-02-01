import React, { Component } from "react";

class Item extends Component {
  render() {
    const { product } = this.props;
    return (
      <li className="item">
        <input />
        {product.name}
      </li>
    );
  }
}

export default Item;
