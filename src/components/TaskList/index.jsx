import React from "react";
import ACTION_TYPES from "../ToDo/reducer/actionTypes";

const TaskList = (props) => {
  const { state, dispatch } = props;
  console.log(state.todos)

  const removeTodo = (id) => {
    dispatch({ type: ACTION_TYPES.REMOVE, id });
  };

  const toggleTodoCompletion = (id) => {
    dispatch({ type: ACTION_TYPES.TOGGLE, id });
  };

  return (
    <>
      <div>
        <h2>Tasks:</h2>
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
                  <span>{todo.text}</span>
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
      </div>
    </>
  );
};

export default TaskList;
