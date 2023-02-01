import React, { Component } from "react";
import Item from "./Item";

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [
        {
          id: "1a",
          name: "Sony",
          avatar: "avatar1",
        },
        {
          id: "2a",
          name: "Iphone",
          avatar: "avatar1",
        },
        {
          id: "3a",
          name: "Samsung",
          avatar: "avatar1",
        },
      ],
    };
  }

  handleSort() {
    this.setState((prev) => ({
      productList: prev.productList.sort(function (a, b) {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      }),
    }));
  }

  handleAdd() {
    this.setState((prev) => ({
      productList: [
        {
          id: "4a",
          name: "Samsung",
          avatar: "avatar1",
        },
        ...prev.productList,
      ],
    }));
  }
  render() {
    return (
      <div>
        <h1>ProductList</h1>
        <button onClick={this.handleSort.bind(this)}>Sort item</button>
        <button onClick={this.handleAdd.bind(this)}>add</button>
        <ul className="list">
          {this.state.productList.map((item) => (
            <Item product={item} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
}
