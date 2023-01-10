import React from "react";
import TodoList from "./components/TodoList";

const listPost = [
  { id: 1, title: "123" },
  { id: 2, title: "456" },
  { id: 3, title: "789" },
  { id: 4, title: "111" },
  { id: 5, title: "134" },
];

TodoFeature.propTypes = {};
function TodoFeature(props) {
  return (
    <>
      <h2>Đây là list</h2>
      <TodoList dataPost={listPost} />
    </>
  );
}

export default TodoFeature;
