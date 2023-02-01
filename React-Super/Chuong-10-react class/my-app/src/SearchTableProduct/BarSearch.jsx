import React, { Component } from "react";
export default class BarSearch extends Component {
  render() {
    const { textSearch, stock, handleChangeInput } = this.props;
    return (
      <form>
        <input
          type="text"
          name="search_product"
          placeholder="Search..."
          value={textSearch}
          onChange={handleChangeInput}
        />
        <div className="tick">
          <input
            name="checked_stock"
            type="checkbox"
            value={stock}
            onChange={handleChangeInput}
          />
          <label>Only show products in stock</label>
        </div>
      </form>
    );
  }
}
