import React, { useState } from "react";
import ACTION_TYPES from "../ToDo/reducer/actionTypes";
import CompletedTodos from "./CompletedTodos";
import NotCompletedTodos from "./NotCompletedTodos";
import AllTodos from "./AllTodos";

const TaskList = (props) => {
  const { state, dispatch } = props;

  const [editID, setEditID] = useState(null);
  const [editText, setEditText] = useState(null);
  const [mode, setMode] = useState("All");

  const removeTodo = (id) => {
    dispatch({ type: ACTION_TYPES.REMOVE, id });
  };

  const toggleTodoCompletion = (id) => {
    dispatch({ type: ACTION_TYPES.TOGGLE, id });
  };

  const editTodo = (id) => {
    const text = editText;
    setEditID(null);
    dispatch({ type: ACTION_TYPES.EDIT, id, text });
    setEditText(null);
  };

  const editTodoHandler = ({ target: { value } }) => {
    setEditText(value);
  };

  return (
    <>
      <div>
        <button onClick={() => {setMode('All')}}>All tasks</button>
        <button onClick={() => {setMode('Completed')}}>Completed tasks</button>
        <button onClick={() => {setMode('NotCompleted')}}>Not completed tasks</button>
        <h2>Tasks:</h2>
        {state.todos.length === 0 ? (
          <p>Заданий нет =)</p>
        ) : (
          <table>
            <tbody>
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
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default TaskList;
