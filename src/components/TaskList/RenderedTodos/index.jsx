import React from "react";
import styles from "../TaskList.module.scss";
import editIcon from "../../../icons/edit.svg";
import saveIcon from "../../../icons/save.svg";
import deleteIcon from "../../../icons/delete.svg";
import cx from "classnames";
import prettyCheckbox from "pretty-checkbox";

const RenderedTodos = (props) => {
  const {
    editTodo,
    setEditID,
    toggleTodoCompletion,
    editID,
    editTodoHandler,
    removeTodo,
    state,
    text,
  } = props;

  return (
    <>
      <table>
        <caption>Tasks</caption>
        <tbody>
          {state.map((todo) => (
            <tr key={todo.id}>
              <td>
                <div class="pretty p-icon p-jelly p-round p-bigger">
                  <input
                    type="checkbox"
                    onChange={() => toggleTodoCompletion(todo.id)}
                    name="isDone"
                    id={todo.id}
                    checked={todo.isDone}
                  />
                  <div class="state p-success">
                    <i class="icon mdi mdi-check">d</i>
                    <label></label>
                  </div>
                </div>
              </td>
              <td>
                {editID === todo.id ? (
                  <input
                    onChange={editTodoHandler}
                    type="text"
                    placeholder={todo.text}
                    autoFocus
                  />
                ) : (
                  <span
                    className={cx({
                      [styles.done]: todo.isDone,
                    })}
                  >
                    {todo.text}
                  </span>
                )}
              </td>
              <td>
                {editID === todo.id ? (
                  <button onClick={() => editTodo(todo.id)}>
                    <img src={saveIcon} alt="save button"></img>
                  </button>
                ) : (
                  <button onClick={() => setEditID(todo.id)}>
                    <img src={editIcon} alt="edit button"></img>
                  </button>
                )}
              </td>
              <td>
                {todo.isDone && (
                  <button onClick={() => removeTodo(todo.id)}>
                    <img src={deleteIcon} alt="delete button"></img>
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className={styles.count}>
        Number of{text} tasks: {state.length}
      </p>
    </>
  );
};

export default RenderedTodos;
