import React from "react";
import AllTodos from "../AllTodos";
import CompletedTodos from "../CompletedTodos";
import NotCompletedTodos from "../NotCompletedTodos";

const RenderedTable = (props) => {
  const {
    editTodo,
    setEditID,
    toggleTodoCompletion,
    editID,
    editTodoHandler,
    removeTodo,
    state,
    mode,
  } = props;
  
  return (
    <>
      {mode === "All" ? (
        <AllTodos
          editTodo={editTodo}
          setEditID={setEditID}
          toggleTodoCompletion={toggleTodoCompletion}
          editID={editID}
          editTodoHandler={editTodoHandler}
          removeTodo={removeTodo}
          state={state}
        />
      ) : mode === "Completed" ? (
        <CompletedTodos
          editTodo={editTodo}
          setEditID={setEditID}
          toggleTodoCompletion={toggleTodoCompletion}
          editID={editID}
          editTodoHandler={editTodoHandler}
          removeTodo={removeTodo}
          state={state}
        />
      ) : (
        <NotCompletedTodos
          editTodo={editTodo}
          setEditID={setEditID}
          toggleTodoCompletion={toggleTodoCompletion}
          editID={editID}
          editTodoHandler={editTodoHandler}
          removeTodo={removeTodo}
          state={state}
        />
      )}
    </>
  );
};

export default RenderedTable;
