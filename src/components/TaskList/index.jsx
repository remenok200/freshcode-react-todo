import React, { useState } from "react";
import ACTION_TYPES from "../ToDo/reducer/actionTypes";
import RenderedTable from "./RenderedTable";
import styles from "./TaskList.module.scss";
import allIcon from "../../icons/all.svg";
import completedIcon from "../../icons/completed.svg";
import notCompletedIcon from "../../icons/notCompleted.svg";
import { TODO_TASK_CHEMA } from "../../utils/validationSchemas";

const TaskList = (props) => {
  const { state, dispatch } = props;

  const [editID, setEditID] = useState(null);
  const [editText, setEditText] = useState(null);
  const [isEditError, setIsEditError] = useState(false);
  const [mode, setMode] = useState("All");

  const removeTodo = (id) => {
    dispatch({ type: ACTION_TYPES.REMOVE, id });
  };

  const toggleTodoCompletion = (id) => {
    dispatch({ type: ACTION_TYPES.TOGGLE, id });
  };

  const editTodo = (id) => {
    let text = editText;

    try {
      TODO_TASK_CHEMA.validateSync({ text });
    } catch (e) {
      setIsEditError(true);
      throw new Error(e);
    }

    text = TODO_TASK_CHEMA.cast({ text }); // чтобы записать результат работы .trim() в схеме валидации
    setIsEditError(false);
    setEditID(null);
    dispatch({ type: ACTION_TYPES.EDIT, id, ...text });
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
              <img src={allIcon} alt="all button" />- All
            </button>
            <button
              className={styles.section}
              onClick={() => {
                setMode("Completed");
              }}
            >
              <img src={completedIcon} alt="completed button" />- Completed
            </button>
            <button
              className={styles.section}
              onClick={() => {
                setMode("NotCompleted");
              }}
            >
              <img src={notCompletedIcon} alt="not completed button" />- Not
              completed
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
              isEditError={isEditError}
            />
          </>
        )}
      </div>
    </>
  );
};

export default TaskList;
