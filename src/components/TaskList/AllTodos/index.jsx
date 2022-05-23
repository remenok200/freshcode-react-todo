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
    isEditError
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
      isEditError={isEditError}
    />
  );
};

export default AllTodos;
