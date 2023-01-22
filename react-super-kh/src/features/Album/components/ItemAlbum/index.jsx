import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

ItemAlbum.propTypes = {
  item: PropTypes.object,
};

ItemAlbum.defaultProps = {
  item: {},
};

function ItemAlbum({ item }) {
  return (
    <>
      <img src={item.img} alt={item.title} />
      <p>{item.title}</p>
    </>
  );
}

export default ItemAlbum;
