import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import classNames from "classnames";

TodoList.propTypes = {
  dataPost: PropTypes.array,
  handleGetIndexTodo: PropTypes.func,
};

TodoList.defaultProps = {
  dataPost: [],
};

function TodoList({ dataPost, handleGetIndexTodo }) {
  const handleClickTodo = (index) => {
    handleGetIndexTodo(index);
  };

  return (
    <ul className="list__todo">
      {dataPost.map((list, idx) => (
        <li
          onClick={() => handleClickTodo(idx)}
          className={classNames({
            cancel: list.status === "cancel" ? "cancel" : "",
          })}
          key={list.id}
        >
          {list.title}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
