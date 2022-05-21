import React from "react";
import RenderedTodos from "../RenderedTodos";

const AllTodos = (props) => {
  const {
    editTodo,
    setEditID,
    toggleTodoCompletion,
    editID,
    editTodoHandler,
    removeTodo,
    state,
  } = props;

  return (
    <RenderedTodos
      editTodo={editTodo}
      setEditID={setEditID}
      toggleTodoCompletion={toggleTodoCompletion}
      editID={editID}
      editTodoHandler={editTodoHandler}
      removeTodo={removeTodo}
      state={state.todos}
    />
  );
};

export default AllTodos;
