import React, { useState } from "react";
import ACTION_TYPES from "../ToDo/reducer/actionTypes";
import RenderedTable from "./RenderedTable";
import styles from "./TaskList.module.scss";
import allIcon from "../../icons/all.svg";
import completedIcon from "../../icons/completed.svg";
import notCompletedIcon from "../../icons/notCompleted.svg";

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
      <div className={styles.container}>
        {state.todos.length === 0 ? (
          <h2 className={styles.noTask}>No tasks =)</h2>
        ) : (
          <>
            <button
              className={styles.section}
              onClick={() => {
                setMode("All");
              }}
            >
              <img src={allIcon} alt="all button" />
            </button>
            <button
              className={styles.section}
              onClick={() => {
                setMode("Completed");
              }}
            >
              <img src={completedIcon} alt="completed button" />
            </button>
            <button
              className={styles.section}
              onClick={() => {
                setMode("NotCompleted");
              }}
            >
              <img src={notCompletedIcon} alt="not completed button" />
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
