import React from "react";
import PropTypes from "prop-types";
import ItemAlbum from "../ItemAlbum";
import "./style.scss";

ListAlbum.propTypes = {
  listAlbum: PropTypes.array.isRequired,
};

ListAlbum.defaultProps = {
  listAlbum: [],
};

function ListAlbum({ listAlbum }) {
  return (
    <ul className="list__album">
      {listAlbum.map((item) => (
        <li key={item.id}>
          <ItemAlbum item={item} />
        </li>
      ))}
    </ul>
  );
}

export default ListAlbum;
