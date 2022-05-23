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
    isEditError
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
          isEditError={isEditError}
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
          isEditError={isEditError}
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
          isEditError={isEditError}
        />
      )}
    </>
  );
};

export default RenderedTable;
