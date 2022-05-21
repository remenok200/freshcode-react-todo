import React from "react";
import RenderedTodos from "../RenderedTodos";

const NotCompletedTodos = (props) => {
  const {
    editTodo,
    setEditID,
    toggleTodoCompletion,
    editID,
    editTodoHandler,
    removeTodo,
    state,
    text = " not completed",
  } = props;

  const temp = state.todos;
  const notCompletedTodos = temp.filter((todo) => {
    return !todo.isDone;
  });

  return (
    <RenderedTodos
      editTodo={editTodo}
      setEditID={setEditID}
      toggleTodoCompletion={toggleTodoCompletion}
      editID={editID}
      editTodoHandler={editTodoHandler}
      removeTodo={removeTodo}
      state={notCompletedTodos}
      text={text}
    />
  );
};

export default NotCompletedTodos;
