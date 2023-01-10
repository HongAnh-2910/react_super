import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

TodoList.propTypes = {
  dataPost: PropTypes.array,
};

TodoList.defaultProps = {
  dataPost: [],
};

function TodoList({ dataPost }) {
  return (
    <ul>
      {dataPost.map((list) => (
        <li key={list.id}>{list.title}</li>
      ))}
    </ul>
  );
}

export default TodoList;
