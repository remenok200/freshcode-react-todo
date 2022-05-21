import React, { useState } from "react";
import ACTION_TYPES from "../ToDo/reducer/actionTypes";
import RenderedTable from "./RenderedTable";

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
        {state.todos.length === 0 ? (
          <h2>No tasks =)</h2>
        ) : (
          <>
            <button
              onClick={() => {
                setMode("All");
              }}
            >
              All tasks
            </button>
            <button
              onClick={() => {
                setMode("Completed");
              }}
            >
              Completed tasks
            </button>
            <button
              onClick={() => {
                setMode("NotCompleted");
              }}
            >
              Not completed tasks
            </button>

            <RenderedTable
              editTodo={editTodo}
              setEditID={setEditID}
              toggleTodoCompletion={toggleTodoCompletion}
              editID={editID}
              editTodoHandler={editTodoHandler}
              removeTodo={removeTodo}
              state={state}
              mode={mode}
            />
          </>
        )}
      </div>
    </>
  );
};

export default TaskList;
