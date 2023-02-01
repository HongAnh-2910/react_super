import React, { Component } from "react";
import BarSearch from "./BarSearch";
import "./index.css";
import TableProduct from "./TableProduct";
const listProductMoc = [
  {
    id: 1,
    category: "Sporting Goods",
    price: "$49.99",
    stocked: true,
    name: "Football",
  },
  {
    id: 2,
    category: "Sporting Goods",
    price: "$9.99",
    stocked: true,
    name: "Baseball",
  },
  {
    id: 3,
    category: "Sporting Goods",
    price: "$29.99",
    stocked: false,
    name: "Basketball",
  },
  {
    id: 4,
    category: "Electronics",
    price: "$99.99",
    stocked: true,
    name: "iPod Touch",
  },
  {
    id: 5,
    category: "Electronics",
    price: "$399.99",
    stocked: false,
    name: "iPhone 5",
  },
  {
    id: 6,
    category: "Electronics",
    price: "$199.99",
    stocked: true,
    name: "Nexus 7",
  },
];
const fetchApi = () => Promise.resolve(listProductMoc);
export default class SearchTableProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productList: [],
      textSearch: "",
      stock: false,
    };
  }

  componentDidMount() {
    fetchApi().then((res) => {
      this.setState({
        productList: res,
      });
    });
  }
  handleChangeInput = (event) => {
    if (event.target.name === "search_product") {
      this.setState({
        textSearch: event.target.value,
      });
    } else if (event.target.name === "checked_stock") {
      this.setState({
        stock: event.target.checked,
      });
    }
  };
  render() {
    const { productList, textSearch, stock } = this.state;
    return (
      <div className="container">
        <BarSearch
          textSearch={textSearch}
          stock={stock}
          handleChangeInput={this.handleChangeInput}
        />
        <TableProduct
          productList={productList}
          textSearch={textSearch}
          stock={stock}
        />
      </div>
    );
  }
}
