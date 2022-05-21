import React, { useState } from "react";
import ACTION_TYPES from "../ToDo/reducer/actionTypes";

const TaskList = (props) => {
  const [editID, setEditID] = useState(null);
  const [editText, setEditText] = useState(null);
  const { state, dispatch } = props;

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
        <h2>Tasks:</h2>
        {state.todos.length === 0 ? (
          <p>Заданий нет =)</p>
        ) : (
          <table>
            <tbody>
              {state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>
                    <input
                      onChange={() => toggleTodoCompletion(todo.id)}
                      type="checkbox"
                      name="isDone"
                      id={todo.id}
                      checked={todo.isDone}
                    />
                  </td>
                  <td>
                    {editID === todo.id ? (
                      <input
                        onChange={editTodoHandler}
                        type="text"
                        placeholder={todo.text}
                      />
                    ) : (
                      <span>{todo.text}</span>
                    )}
                  </td>
                  <td>
                    {editID === todo.id ? (
                      <button onClick={() => editTodo(todo.id)}>
                        Save task!
                      </button>
                    ) : (
                      <button onClick={() => setEditID(todo.id)}>
                        Edit task
                      </button>
                    )}
                  </td>
                  <td>
                    {todo.isDone && (
                      <button onClick={() => removeTodo(todo.id)}>
                        Remove task
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default TaskList;
