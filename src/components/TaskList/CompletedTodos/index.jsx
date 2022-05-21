import React from "react";
import RenderedTodos from "../RenderedTodos";

const CompletedTodos = (props) => {
  const {
    editTodo,
    setEditID,
    toggleTodoCompletion,
    editID,
    editTodoHandler,
    removeTodo,
    state,
    text = " completed",
  } = props;

  const temp = state.todos;
  const completedTodos = temp.filter((todo) => {
    return todo.isDone;
  });

  return (
    <RenderedTodos
      editTodo={editTodo}
      setEditID={setEditID}
      toggleTodoCompletion={toggleTodoCompletion}
      editID={editID}
      editTodoHandler={editTodoHandler}
      removeTodo={removeTodo}
      state={completedTodos}
      text={text}
    />
  );
};

export default CompletedTodos;
