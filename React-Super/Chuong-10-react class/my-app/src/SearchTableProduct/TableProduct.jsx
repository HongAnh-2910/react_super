import React, { Component } from "react";
import CategoriesProduct from "./CategoriesProduct";
import RowProduct from "./RowProduct";

export default class TableProduct extends Component {
  render() {
    const { textSearch, stock, productList } = this.props;
    let categoryCheck = null;
    let row = [];
    productList.forEach((productItem) => {
      if (productItem.name.toLowerCase().indexOf(textSearch) === -1) return "";
      if (stock && !productItem.stocked) return "";
      if (productItem.category !== categoryCheck) {
        row.push(
          <CategoriesProduct
            category={productItem.category}
            key={productItem.category}
          />
        );
      }
      row.push(<RowProduct productItem={productItem} key={productItem.id} />);

      categoryCheck = productItem.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{row}</tbody>
      </table>
    );
  }
}
