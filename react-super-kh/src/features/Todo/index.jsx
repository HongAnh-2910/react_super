import React, { useState } from "react";
import TodoList from "./components/TodoList";

const initlistPost = [
  { id: 1, title: "BMW", status: "success" },
  { id: 2, title: "MEC", status: "cancel" },
  { id: 3, title: "HONDA", status: "success" },
  { id: 4, title: "HYUNDAI", status: "cancel" },
];

TodoFeature.propTypes = {};
function TodoFeature(props) {
  const [listPost, setListPost] = useState(initlistPost);
  const [status, setStatus] = useState("all");
  const handleGetIndexTodo = (index) => {
    const newListPost = [...listPost];
    newListPost[index] = {
      ...newListPost[index],
      status: newListPost[index].status === "success" ? "cancel" : "success",
    };
    setListPost(newListPost);
  };

  const handleClickShowAll = () => {
    setStatus("all");
  };

  const handleClickShowSuccess = () => {
    setStatus("success");
  };

  const handleClickShowCancel = () => {
    setStatus("cancel");
  };

  const todoRender = listPost.filter(
    (item) => status === "all" || item.status === status
  );
  return (
    <>
      <h2>List hãng xe</h2>
      <TodoList dataPost={todoRender} handleGetIndexTodo={handleGetIndexTodo} />
      <button onClick={handleClickShowAll}>Show All</button>
      <button onClick={handleClickShowSuccess}>Show success</button>
      <button onClick={handleClickShowCancel}>Show cancel</button>
    </>
  );
}

export default TodoFeature;
